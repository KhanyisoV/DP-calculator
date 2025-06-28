document.addEventListener('DOMContentLoaded',function()
{
    // Loader Logic with optional percentage counter
        window.addEventListener('load', function() {
            // Optional: Simulate loading with percentage counter
            let percent = 0;
            const percentElement = document.getElementById('loadingPercent');
            
            const loadingInterval = setInterval(function() {
                percent += Math.random() * 15;
                if (percent > 100) percent = 100;
                
                if (percentElement) {
                    percentElement.textContent = Math.round(percent) + '%';
                }
                
                if (percent >= 100) {
                    clearInterval(loadingInterval);
                    
                    // Hide loader after a short delay
                    setTimeout(function() {
                        const loader = document.getElementById('loader');
                        const mainContent = document.getElementById('mainContent');
                        
                        loader.classList.add('hidden');
                        mainContent.classList.add('loaded');
                        
                        setTimeout(function() {
                            loader.style.display = 'none';
                        }, 500);
                    }, 500);
                }
            }, 100);
        });


     const DP = 
    document.getElementById('dp-mark');

    const PassMark = 
    document.getElementById('exam-mark');

    const DpWeigh = 
    document.getElementById('dp-weighting');

    const ExamWeigh = 
    document.getElementById('exam-weighting');
 
    const Display = 
    document.getElementById('result-dp');

    const Calculate = 
    document.getElementById('calculate-btn');

    const clearBtn =
    document.getElementById('clear-btn')


    Calculate.addEventListener('click',function()
{

    const dp = parseFloat(DP.value) ||0;
    const pass = parseFloat(PassMark.value) ||0;
    const dpw = parseFloat(DpWeigh.value) ||0;
    const ExamW = parseFloat(ExamWeigh.value)||0;

    const final = (dp *(dpw/100)) + (pass *(ExamW/100))


    if(final >=50)
    {
        Display.textContent ="Result: Your final mark is "+final.toFixed(2) +"\nYou passed!";

    }
    else
    if(final <50 && final>=40)
    {
        Display.textContent ="Result: Your final mark is "+final.toFixed(2) +"\nYou qualify for a Supp!";

    }
    else
    if(final <40 && final>0)
    {
        Display.textContent ="Result: Your final mark is "+final.toFixed(2) +"\nSorry, you failed!";

    }
    else
    {
        Display.textContent = "Error, negative number"
    }



})


clearBtn.addEventListener('click', function()
{
    Display.textContent = "";
    document.getElementById('dp-mark').value ='';
    document.getElementById('exam-mark').value ='';
    document.getElementById('dp-weighting').value ='';
    document.getElementById('exam-weighting').value ='';
   
})




})