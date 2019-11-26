import React from "react";

export default function LoginForm() {
	return <div>
		<form>
			<label for="Login Email">Email</label>
			<input type="email" name="loginEmail" placeholder="email"/>
			<label for="loginPassword"> Password</label>
			<input type="password" name="loginPassword" placeholder="password"/>
			<button>Log In</button>
		</form>
	</div>
}