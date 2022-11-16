function resetRemarks(subject) {
  document.getElementById(`${subject}_remarks`).innerText = ''
}

/**
 * DRY Principle ---> Don't Repeat Yourself
 */

function calculateSubject(subject) {
  const subject_assignment = document.getElementById(`${subject}_assignment`).value
    const subject_test = document.getElementById(`${subject}_test`).value
    const subject_ca = parseInt(subject_assignment) + parseInt(subject_test)

    document.getElementById(`${subject}_ca`).value = subject_ca;
    const subject_exam = document.getElementById(`${subject}_exam`).value
    const subject_overall = subject_ca + parseInt(subject_exam)
    document.getElementById(`${subject}_total`).value = subject_overall
   
    if ( subject_overall >= 70){
      document.getElementById(`${subject}_remarks`).innerText = 'Excellent'
    } else if(subject_overall >= 60){
      document.getElementById(`${subject}_remarks`).innerText = 'Better' 
    }else if (subject_overall >= 50){
      document.getElementById(`${subject}_remarks`).innerText = 'Good'
    }else if (subject_overall >= 40){
      document.getElementById(`${subject}_remarks`).innerText = 'Pass'
    }else {
      document.getElementById(`${subject}_remarks`).innerText = 'Failed'
    }
   
}
function calculatetotal(subject){
 
}


function calculate() {
  let subjects = ['mth', 'eng','qr','vr','com','soc','cr','yor','bas','cca','his','wri','rhy','sec','fre','hea','bat','civ','phe',''];
  subjects.forEach(subject => {
    try {
      resetRemarks(subject);
      calculateSubject(subject);
      calculatetotal(subject);
    } catch(e) {
      console.log(`Unable to calculate subject ${subject}: ${e}`);
    }
  })
}


// document.querySelector('body').addEventListener('onload', (e) => {
//     alert('Hello');
// })