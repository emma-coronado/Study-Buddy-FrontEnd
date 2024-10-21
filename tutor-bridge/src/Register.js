function Register() {
    return (
        <div class="card container-sm p-5 loginForm">
            <form>
                <div class="mb-3">
                    <label for="nameInput" class="form-label">Name</label>
                    <input type="text" class="form-control" id="nameInput"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="InputPassword"/>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                    <label class="form-check-label" for="invalidCheck">
                        Agree to terms and conditions
                    </label>
                    <div class="invalid-feedback">
                        You must agree before submitting.
                    </div>
                </div>
                <button type="submit" class="btn btn-primary loginSubmit mt-3">Sign Up</button>
            </form>
        </div>
    )
}

export default Register;