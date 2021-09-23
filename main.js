import './style.css'
import './src/js/index'
import 'bootstrap/dist/css/bootstrap.css'

document.querySelector('#app').innerHTML = `
  <main class="container">
    <form>
      <div class="form-group mb-1">
        <label for="unreadLink">Link</label>
        <input type="url" id="unreadLink" class="form-control" placeholder="Type url.."/>
      </div>
      <div>
        <a id="unreadLink1" href="#" onclick="changeColor('blue', 'unreadLink1')" class="btn btn-primary">Change</a>
        <a id="unreadLink2" href="#" onclick="changeColor('red', 'unreadLink2')" class="btn btn-primary">Change</a>
      </div>
    </form>
  </main>
`
