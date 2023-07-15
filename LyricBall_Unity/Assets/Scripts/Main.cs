using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class Main : MonoBehaviour
{
    [SerializeField]private float s_Thrust = 120;
    [SerializeField] private int ballCountPush=0;
    [SerializeField] Slider t_Slider;

    [SerializeField] private GameObject prepub;
    private GameObject[] obj= new GameObject[30];
    private Rigidbody[] _rigidbody=new Rigidbody[30];
    private TextMeshProUGUI[] _text=new TextMeshProUGUI[30];
    public float span = 1f;
    private float currentTime = 0f;
    private int i = 0;
    private int ballCountGet = 0;
    [SerializeField] private TextMeshProUGUI ballCount_UI;
    [SerializeField] private TextMeshProUGUI resultUI_Text;
    void Start()
    {
        for (int i = 0; i<30; i++)
        {
            obj[i] = Instantiate(prepub);
            _rigidbody[i] = obj[i].GetComponent<Rigidbody>();
            _text[i] = obj[i].GetComponentInChildren<TextMeshProUGUI>();
        }
        t_Slider.onValueChanged.AddListener(setSliderValue);
    }

    // Update is called once per frame
    void Update()
    {
        #if UNITY_EDITOR_64
        currentTime += Time.deltaTime;
        
        if(currentTime > span)
        {
            CreateBall("え");
            currentTime = 0f;
        }
        #endif
    }

    void setSliderValue(float value)
    {
        s_Thrust = value;
    }

    public void CreateBall(string t)
    {
        i++;
        ballCountPush++;
        if (i == 30)
            i = 0;
        _text[i].text = t;
        obj[i].transform.position = new Vector3(3.144f,4.947f,1.537f);
        _rigidbody[i].velocity = Vector3.zero;
        _rigidbody[i].AddForce(0,0,(s_Thrust)*10f);
    }
    
    public void Add_BallCount(int x)
    {
        ballCountGet += x;
        ballCount_UI.text = ballCountGet.ToString();
    }

    public void Result()
    {
        var result_ball = ballCountGet - ballCountPush;
        if(result_ball>0)
            resultUI_Text.text = "+"+(ballCountGet-ballCountPush).ToString()+"球";
        else
            resultUI_Text.text = (ballCountGet-ballCountPush).ToString()+"球";
    }
    
}
