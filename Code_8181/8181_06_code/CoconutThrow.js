/* Script Provided by Will Goldstone as part of Unity Game Development Essentials book assets */
/* Please Do Not Remove this comment - this script is for reference only */
static var canThrow : boolean = false;
var throwSound : AudioClip;
var coconutObject : Rigidbody;
var throwForce : float;

function Update () {
	
	if(Input.GetButtonUp("Fire1") && canThrow){
			audio.PlayOneShot(throwSound);
			var newCoconut : Rigidbody = Instantiate(coconutObject, transform.position, transform.rotation);
				newCoconut.name = "coconut";
				newCoconut.rigidbody.velocity = transform.TransformDirection(Vector3(0,0, throwForce));
				Physics.IgnoreCollision(transform.root.collider, newCoconut.collider, true);
	}
}

@script RequireComponent(AudioSource)