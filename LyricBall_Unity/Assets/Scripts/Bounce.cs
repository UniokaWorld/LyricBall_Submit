using UnityEngine;

public class Bounce : MonoBehaviour
{
    /// <summary>
    /// 跳ね返す強さの変数
    /// </summary>
    [SerializeField]
    private float bounce = 10f;

    /// <summary>
    /// 衝突した時
    /// </summary>
    /// <param name="collision"></param>
    private void OnCollisionEnter(Collision collision)
    {
        // 当たった相手のRigidbodyのx軸方向に力を加える。
        // 今回はx軸のマイナス方向に力を加えて跳ね返す。
        collision.rigidbody.AddForce(0f, -bounce, 0f, ForceMode.Impulse);
    }

}