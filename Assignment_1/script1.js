function togleTheme(){
        document.body.classList.toggle('dark-theme');
    };
    document.getElementById('theme-switch-btn').addEventListener('click',togleTheme);
    function showGreet() {
        const hour=new Date().getHours();
        const greeting =
             hour<12?'Good Morning!':
             hour<18?'Good Afternoon!':'Good Evening!';
        document.getElementById('greeting-message').textContent = 'Hello! '+greeting}
    showGreet();
    const readBtn =document.getElementById('readmore-btn')
    const coursesList =document.getElementById('courses-list')
    const items=Array.from(coursesList.querySelectorAll('li'))
    let expanded=false
    items.forEach((li,i) => {if(i>=4)li.style.display='none'})
    function toggleReadMore(){
            if(!expanded) {
                items.forEach(li=>li.style.display='list-item');
                readBtn.textContent='Read Less';
            }else{
                items.forEach((li, i)=>{
                    li.style.display=i<4?'list-item':'none';
                });
                readBtn.textContent='Read More';
            }
            expanded = !expanded;
        }
      readBtn.addEventListener('click',toggleReadMore);
      document.getElementById("gret").addEventListener('click',function(){alert("Welcome to my Profile Page!");});
      window.onload = function(){
        document.getElementById("gret").click();
      };
      function toggleEdit(el){
        const isEd=el.isContentEditable
        el.contentEditable=!isEd
        el.style.borderisEd ? 'none' : '1px solid #ccc'
      }
      function temp1(){
        toggleEdit(document.querySelector('#skills ul'));
      }
      function temp2(){
        toggleEdit(coursesList);
      }
      document.getElementById('edit-skills-btn').addEventListener('click',temp1)
      document.getElementById('edit-courses-btn').addEventListener('click',temp2)