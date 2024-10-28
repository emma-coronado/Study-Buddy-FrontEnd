import Login from './Login';
import Register from './Register';

var page = "login";

function Page (){
    if (page == "login"){
        let firstState = '';
    }

    return (
<div class="card text-center loginForm">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="true" href="#">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <Login/>
  </div>
</div>
    )
}

export default Page;