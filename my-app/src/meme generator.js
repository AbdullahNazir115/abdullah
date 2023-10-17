
let [meme, memer] = useState({
  randimg:''
});

let [showw, shower] = useState('');
let [jk, jkoo] = useState('');
let [jk1, jkoo2] = useState('');
let [out, outer] = useState(true);
let[allmemes,amemes]=useState([])
// let gh = data.map(function(item) {
//   return item.img;
// });

useEffect(function(){
fetch(' https://api.imgflip.com/get_memes')
.then(res=> res.json())
.then(data=>amemes(data.data.memes))
},[])

function generate() {
  let randomIndex = Math.floor(Math.random() * allmemes.length);
  let randomImage = allmemes[randomIndex].url;
  memer(function(o){
    return({
      ...o,
      randimg:randomImage
    })
  })
  
  // jkoo('');
  // jkoo2('');
}

function change(){
outer(function(out){
  
return !out
})
}


function ui(e) {
  jkoo(e.target.value);
}

function ui2(e) {
  jkoo2(e.target.value);
}

<>
      <div className="meme">
        <div className="in" style={{ margin: '20px 0' }}>
          <input type="text" name="" id="inputt" value={jk} onInput={ui} />
          <input type="text" name="" id="" value={jk1} onInput={ui2} />
        </div>
        <br />
        <br />
        <br />
        <br />

        <button style={{ width: '200px', margin: '50px 0' }} onClick={generate}>
          GENERATE A NEW MEME
        </button>
        <div className="e">
          <div className="soldd1">{jk}</div>
          <div className="soldd2">{jk1}</div>

          <img src={meme.randimg} alt="" width={'250px'} />

          {/* <button onClick={change}>g</button>
          <p>{out ? 'yes' :'no'}</p> */}
        </div>
      </div>
    </>