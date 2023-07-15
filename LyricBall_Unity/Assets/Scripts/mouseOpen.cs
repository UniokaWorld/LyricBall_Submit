using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class mouseOpen : MonoBehaviour
{
    // Start is called before the first frame update
    public int open = 0;
    private int rotation_x = 0;
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (open!=0)
        {
            if (rotation_x != 90)
            {
                this.transform.Rotate(1,0,0,Space.Self);
                rotation_x++;
            }
        }
        else
        {
            if (rotation_x != 0)
            {
                this.transform.Rotate(-1,0,0,Space.Self);
                rotation_x--;
            }
        }
    }
}
