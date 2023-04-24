'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');


for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    for (let i = 0; i < themeBtn.length; i++) {

      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');

    }

  })

}



document.getElementById('language-select').addEventListener('change', function() {
  var languageSelect = document.getElementById('language-select');
  var textArea = document.getElementById('text-area');
  var selectedLanguage = languageSelect.value;
  var selectedText = '';

  if (selectedLanguage === 'user-input') {
    textArea.readOnly = false; // make textarea editable
    textArea.focus(); // set focus to textarea
  } else {
    textArea.readOnly = true; // make textarea read-only
    switch (selectedLanguage) {
      case 'english':
        selectedText = "Once upon a time, there was a boy who had a small car. He used to ride it to school every day. One day, he felt that something was wrong with his car. He went to his father to get it fixed. His father told him how to fix the car, but he did not understand it. Then he asked his friend for help, and his friend fixed the car for him. He thanked his friend and learned that it is always good to help friends.";
        break;
      case 'hindi':
        selectedText = 'एक बार एक लड़का था जिसके पास एक छोटी सी गाड़ी थी। वह रोज गाड़ी पर सवार होकर स्कूल जाता था। एक दिन उसे अपनी गाड़ी में कुछ खराबी महसूस हुई। वह गाड़ी को ठीक करने के लिए अपने पिता के पास गया। पिता ने उसे गाड़ी को ठीक करने का उपाय बताया लेकिन उसे समझ नहीं आया। फिर उसने अपने दोस्त से मदद मांगी और उसकी गाड़ी ठीक करवा दी। उसने अपने दोस्त को धन्यवाद दिया और सीखा कि हमेशा दोस्तों की मदद करना अच्छा होता है।';
        break;
      case 'bengali':
        selectedText = 'একবার একটি ছেলে ছিল যার কাছে একটি ছোট গাড়ি ছিল। সে প্রতিদিন স্কুলে গাড়ি চালাতেন। একদিন তার গাড়ির সাথে কিছু সমস্যা হয়ে উঠলো। সে তার বাবাকে ঠিক করার জন্য গিয়েছে। তার বাবা তাকে গাড়ি ঠিক করার উপায় বলেছেন, কিন্তু সেটি বুঝতে পারেনি। তারপর সে তার বন্ধুর সাহায্য চাইল এবং তার বন্ধু তার গাড়ি ঠিক করে দিলো। সে তার বন্ধুকে ধন্যবাদ জানালো এবং শিখলো যে সদা তাদের বন্ধুদের সাহায্য করা ভালো। ';
        break;
      case 'gujarati':
        selectedText = 'એક વખત એક છોકરો હતો જેની પાસે એક નાની કાર હતી. તે પ્રતિદિન સ્કૂલ જવા માટે તેની કાર પર સવાર હતો.એક દિવસ તેની કાર સાથે કંઈક સમસ્યા ઉઠી ગઈ હતી. તે તેના પિતાને સુધારવા માટે ગયો હતો. તેના પિતાએ તેને કાર ઠીક કરવાની પદ્ધતિ સમજાવી હતી, પરંતુ તે તેને સમજી શકતો નહીં. ત્યાર પછી તે તેના મિત્રની મદદ માંગી અને તેના મિત્રે તેની કાર ઠીક કરી દીધી. તે તેના મિત્રને આભાર જણાવ્યો અને શીખ્યો કે સદાક્ષર તેમના મિત્રોની મદદ કરવા સરળ જ હોય છે.';
        break;
      case 'marathi':
        selectedText = 'एका वेळी एक मुलगा होता जोचं एका छोट्या कारचं वाटत होतं. तो सर्व दिवसांत स्कूलला कार वापरत होता. एक दिवस त्याला त्या कारावर काहीतरी बरं होऊन वाटलं. त्याने त्याच्या वडीलांच्या मदतीसाठी गाडीचं सुधारण करण्याचे ठरवलं. पण तो ते समजलं नाही. नंतर तो आपल्या मित्राच्या मदतीसाठी मागच्या सोबतच गेला आणि त्यांनी त्याच्या काराला ठीक करून दिलं. त्याने आपल्या मित्राला धन्यवाद दिलं आणि शिकलं की मित्रांना मदत करणं नेहमीच चांगलं असतं.';
        break;
      case 'tamil':
        selectedText = 'ஒரு காலத்தில், ஒரு சிறுவன் ஒரு சிறிய கார் வைத்திருந்தான். அதை சவாரி செய்து தினமும் பள்ளிக்கு செல்வது வழக்கம். ஒரு நாள், தன் காரில் ஏதோ கோளாறு இருப்பதாக உணர்ந்தான். அதை சரி செய்ய தந்தையிடம் சென்றார். காரை எப்படி சரிசெய்வது என்று அவனுடைய தந்தை சொன்னான், ஆனால் அவனுக்கு அது புரியவில்லை. பின்னர் அவர் தனது நண்பரிடம் உதவி கேட்டார், அவரது நண்பர் அவருக்கு காரை சரிசெய்தார். அவர் தனது நண்பருக்கு நன்றி கூறினார் மற்றும் நண்பர்களுக்கு உதவுவது எப்போதும் நல்லது என்பதை அறிந்து கொண்டார்.';
        break;
      default:
        selectedText = '';
        break;
    }
    textArea.value = selectedText; // set textarea value to selected text
  }
});

