
export const functionality = () =>{
        const selector = document.querySelectorAll('.navigation__links');
        console.log([...selector]);
        [...selector].forEach(e =>{
            e.addEventListener('click', e => {
                console.log('clicked');
    

                const checkBox = document.querySelector('#navi-toggle');
                if(checkBox.checked === true){
                    console.log('checked');
                    checkBox.checked = false;
                }else{
                    checkBox.checked = true;
                }

            })
        });

};