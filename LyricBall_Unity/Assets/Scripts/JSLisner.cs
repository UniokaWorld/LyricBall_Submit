using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class JSLisner : MonoBehaviour
{
    [SerializeField]private mouseOpen _mouseOpen;
    [SerializeField] private Main _main;
    [SerializeField] private GameObject result_UI;
    [SerializeField] private TextMeshProUGUI songNameText;
    [SerializeField] private TextMeshProUGUI aetistNameText;
    public void SetSongName(string str)
    {
        songNameText.text = str;
    }
    public void ArtistName(string str)
    {
        aetistNameText.text = str;
    }
    public void SendChar(string str)
    {
        _main.CreateBall(str);
    }

    public void Choruses(int isChruses)
    {
        _mouseOpen.open = isChruses;
    }

    public void SongEnd(int status)
    {
        Invoke("Result", 5.0f);
    }

    void Result()
    {
        result_UI.SetActive(true);
        _main.Result();
    }
}
