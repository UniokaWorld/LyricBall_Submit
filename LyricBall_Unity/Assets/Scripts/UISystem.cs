using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using TMPro;
using Unity.VisualScripting;
using UnityEngine;

public class UISystem : MonoBehaviour
{
    [SerializeField]private TMP_InputField _url;
    [DllImport("__Internal")]
    private static extern void SongSetSend(int id,string url);
    public void ButtonSet(int id)
    {
        this.gameObject.SetActive(false);
        SongSetSend(id, _url.text);
    }
}
