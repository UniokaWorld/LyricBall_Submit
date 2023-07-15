using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RotateFixed : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if(this.transform.position.y>5.4f)
            gameObject.transform.rotation = Quaternion.Euler(0, 0, 90);
    }
}
