using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class hole : MonoBehaviour
{
    [SerializeField] private Main _main;
    [SerializeField] private int plus;
    void OnTriggerEnter(Collider other)
    {
        _main.Add_BallCount(plus);
    }
}
