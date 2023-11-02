(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

// Multiple select services dropdown
var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}

// State, city dropdown - https://codepen.io/david-arun/pen/LrqmoY?editors=1010
var AndraPradesh = ["Anantapur","Chittoor","East Godavari","Guntur","Kadapa","Krishna","Kurnool","Prakasam","Nellore","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari"];
var ArunachalPradesh = ["Anjaw","Changlang","Dibang Valley","East Kameng","East Siang","Kra Daadi","Kurung Kumey","Lohit","Longding","Lower Dibang Valley","Lower Subansiri","Namsai","Papum Pare","Siang","Tawang","Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang","Itanagar"];
var Assam = ["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup Metropolitan","Kamrup (Rural)","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Dima Hasao","Sivasagar","Sonitpur","South Salmara Mankachar","Tinsukia","Udalguri","West Karbi Anglong"];
var Bihar = ["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"];
var Chhattisgarh = ["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Janjgir Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Korba","Koriya","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja"];
var Goa = ["North Goa","South Goa"];
var Gujarat = ["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda","Kutch","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad"];
var Haryana = ["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"];
var HimachalPradesh = ["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul Spiti","Mandi","Shimla","Sirmaur","Solan","Una"];
var JammuKashmir = ["Anantnag","Bandipora","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kargil","Kathua","Kishtwar","Kulgam","Kupwara","Leh","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"];
var Jharkhand = ["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribagh","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahebganj","Seraikela Kharsawan","Simdega","West Singhbhum"];
var Karnataka = ["Bagalkot","Bangalore Rural","Bangalore Urban","Belgaum","Bellary","Bidar","Vijayapura","Chamarajanagar","Chikkaballapur","Chikkamagaluru","Chitradurga","Dakshina Kannada","Davanagere","Dharwad","Gadag","Gulbarga","Hassan","Haveri","Kodagu","Kolar","Koppal","Mandya","Mysore","Raichur","Ramanagara","Shimoga","Tumkur","Udupi","Uttara Kannada","Yadgir"];
var Kerala = ["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"];
var MadhyaPradesh = ["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna",
"Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"];
var Maharashtra = ["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"];
var Manipur = ["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"];
var Meghalaya = ["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"];
var Mizoram = ["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip","Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"];
var Nagaland = ["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"];
var Odisha = ["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Debagarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghpur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Subarnapur","Sundergarh"];
var Punjab = ["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Mohali","Muktsar","Pathankot","Patiala","Rupnagar","Sangrur","Shaheed Bhagat Singh Nagar","Tarn Taran"];
var Rajasthan = ["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Ganganagar","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Tonk","Udaipur"];
var Sikkim = ["East Sikkim","North Sikkim","South Sikkim","West Sikkim"];
var TamilNadu = ["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"];
var Telangana = ["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar","Jogulamba","Kamareddy","Karimnagar","Khammam","Komaram Bheem","Mahabubabad","Mahbubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Ranga Reddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal Rural","Warangal Urban","Yadadri Bhuvanagiri"];
var Tripura = ["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"];
var UttarPradesh = ["Agra","Aligarh","Allahabad","Ambedkar Nagar","Amethi","Amroha","Auraiya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kheri","Kushinagar","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"];
var Uttarakhand  = ["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri","Pithoragarh","Rudraprayag","Tehri","Udham Singh Nagar","Uttarkashi"];
var WestBengal = ["Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"];
var AndamanNicobar = ["Nicobar","North Middle Andaman","South Andaman"];
var Chandigarh = ["Chandigarh"];
var DadraHaveli = ["Dadra Nagar Haveli"];
var DamanDiu = ["Daman","Diu"];
var Delhi = ["Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi","West Delhi"];
var Lakshadweep = ["Lakshadweep"];
var Puducherry = ["Karaikal","Mahe","Puducherry","Yanam"];


$("#inputState").change(function(){
  var StateSelected = $(this).val();
  var optionsList;
  var htmlString = "";

  switch (StateSelected) {
    case "Andra Pradesh":
        optionsList = AndraPradesh;
        break;
    case "Arunachal Pradesh":
        optionsList = ArunachalPradesh;
        break;
    case "Assam":
        optionsList = Assam;
        break;
    case "Bihar":
        optionsList = Bihar;
        break;
    case "Chhattisgarh":
        optionsList = Chhattisgarh;
        break;
    case "Goa":
        optionsList = Goa;
        break;
    case  "Gujarat":
        optionsList = Gujarat;
        break;
    case "Haryana":
        optionsList = Haryana;
        break;
    case "Himachal Pradesh":
        optionsList = HimachalPradesh;
        break;
    case "Jammu and Kashmir":
        optionsList = JammuKashmir;
        break;
    case "Jharkhand":
        optionsList = Jharkhand;
        break;
    case  "Karnataka":
        optionsList = Karnataka;
        break;
    case "Kerala":
        optionsList = Kerala;
        break;
    case  "Madya Pradesh":
        optionsList = MadhyaPradesh;
        break;
    case "Maharashtra":
        optionsList = Maharashtra;
        break;
    case  "Manipur":
        optionsList = Manipur;
        break;
    case "Meghalaya":
        optionsList = Meghalaya ;
        break;
    case  "Mizoram":
        optionsList = Mizoram;
        break;
    case "Nagaland":
        optionsList = Nagaland;
        break;
    case  "Orissa":
        optionsList = Orissa;
        break;
    case "Punjab":
        optionsList = Punjab;
        break;
    case  "Rajasthan":
        optionsList = Rajasthan;
        break;
    case "Sikkim":
        optionsList = Sikkim;
        break;
    case  "Tamil Nadu":
        optionsList = TamilNadu;
        break;
    case  "Telangana":
        optionsList = Telangana;
        break;
    case "Tripura":
        optionsList = Tripura ;
        break;
    case  "Uttaranchal":
        optionsList = Uttaranchal;
        break;
    case  "Uttar Pradesh":
        optionsList = UttarPradesh;
        break;
    case "West Bengal":
        optionsList = WestBengal;
        break;
    case  "Andaman and Nicobar Islands":
        optionsList = AndamanNicobar;
        break;
    case "Chandigarh":
        optionsList = Chandigarh;
        break;
    case  "Dadar and Nagar Haveli":
        optionsList = DadraHaveli;
        break;
    case "Daman and Diu":
        optionsList = DamanDiu;
        break;
    case  "Delhi":
        optionsList = Delhi;
        break;
    case "Lakshadeep":
        optionsList = Lakshadeep ;
        break;
    case  "Pondicherry":
        optionsList = Pondicherry;
        break;
}


  for(var i = 0; i < optionsList.length; i++){
    htmlString = htmlString+"<option value='"+ optionsList[i] +"'>"+ optionsList[i] +"</option>";
  }
  $("#inputDistrict").html(htmlString);

});

// Contact form - time picker - https://codepen.io/danuakbar/pen/ObjXZK?editors=0010
var query = '';
var hours = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
var hours24 = ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
var hoursUpdated = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
var minutes = ['00', '30'];
var format = ['am', 'pm'];
var time;
var timeArray = [];
var items = [];
var error;
var errorMessage;
var list1 = $('#list-suggestions1');
var list2 = $('#list2');

itemList(this.hours, this.minutes, this.format, this.time, this.timeArray);

function itemList(hours, minutes, format, time, timeArray) {
    hours.map(i => {
        minutes.map(j => {
            format.map(k => {
                time = i + ":" + j + " " + k;
                timeArray.push(time);
                this.timeArray = timeArray;
            });
        });
    });
}

function querySubset(query) {
    this.query = query.toLowerCase();
    this.hour = query.substring(0, 2);
    this.timeSelector = query.substring(2, 3);
    this.minute = query.substring(3, 5);
    this.formatSelector = query.substring(5, 6);
    this.formatUpdated = query.substring(6, 8);
}

function hoursUpdate(input, inputID) {
    if (inputID === 'hour-input1') {
        this.hours24.map((value, i) => {
            if (input === value) {
                this.query = this.hoursUpdated[i];
                $("#" + inputID).val(this.query);
            }
        });
    } else if (inputID === 'hour-input2') {
        this.hours24.map((value, i) => {
            if (input === value) {
                this.query = this.hoursUpdated[i];
                $("#" + inputID).val(this.query);
            }
        });
    }
}

function bindResult(inputID) {
    if (inputID === 'hour-input1') {
        list1.show();
        // list2.hide();
    } else if (inputID === 'hour-input2') {
        list2.show();
        // list1.hide();
    }
    this.error = false;
    $('#' + inputID).removeClass('active');
    $('.error').html('').removeClass("alert");

    this.items = this.timeArray.filter(function(jam) {
        return jam.indexOf(this.query) > -1;
    }.bind(this));

    if (inputID === 'hour-input1') {
        list1.empty();
        this.items.forEach(function(hour, i) {
            var entry = document.createElement('li');
            entry.append(document.createTextNode(hour));
            entry.id = i;
            entry.setAttribute("onclick", "select('" + hour + "', '" + inputID + "')");
            list1.append(entry);
        });
    } else if (inputID === 'hour-input2') {
        list2.empty();
        this.items.forEach(function(hour, i) {
            var entry = document.createElement('li');
            entry.append(document.createTextNode(hour));
            entry.id = i;
            entry.setAttribute("onclick", "select('" + hour + "', '" + inputID + "')");
            list2.append(entry);
        });
    }
}

function onErrorResult(errorMes, inputID) {
    this.error = true;
    this.errorMessage = errorMes;
    $('.time-picker').attr('data-original-title', this.errorMessage);
    $('.error').html(this.errorMessage).addClass(' alert alert-danger');
    $('#' + inputID).addClass('active');
}

function filter(query, inputID) {
    if (query !== "") {
        this.querySubset(query);
        if (!isNaN(this.hour)) {
            this.hoursUpdate(this.hour, inputID);
            this.bindResult(inputID);
            if (this.timeSelector === ":") {
                this.bindResult(inputID);
                if (this.minute !== "") {
                    if (!isNaN(this.minute))
                        this.bindResult(inputID);
                    if (this.formatSelector === " ") {
                        this.bindResult(inputID);
                        if (this.formatUpdated === "am" || this.formatUpdated === "pm") {
                            this.bindResult(inputID);
                        } else {
                            errorMessage = "Define am/pm";
                            this.onErrorResult(errorMessage, inputID);
                        }
                    } else {
                        errorMessage = "Use space before am/pm";
                        this.onErrorResult(errorMessage, inputID);
                    }
                } else {
                    errorMessage = "Fill your minute with a number";
                    this.onErrorResult(errorMessage, inputID);
                }
            } else {
                errorMessage = "Use ' : ' between hour and minute";
                this.onErrorResult(errorMessage, inputID);
            }
        } else {
            errorMessage = "Fill your hour with a number";
            this.onErrorResult(errorMessage, inputID);
        }
    } else {
        this.error = false;
        this.errorMessage = "";
        $('.error').html('').removeClass("alert");
        $('#' + inputID).removeClass('active');
        this.items = [];
    }
}

function select(item, inputID) {
    if (inputID === 'hour-input1') {
        list1.hide();
    } else if (inputID === 'hour-input2') {
        list2.hide();
    }
    this.error = false;
    this.errorMessage = "";
    this.query = item;
    $("#" + inputID).val(this.query);
    $('#' + inputID).removeClass('active');
    $('.error').html('').removeClass("alert");
    this.items = [];
}

// Contact form valiation & submission
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('form');
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const whatsappInput = document.getElementById('whatsapp');
  const emailInput = document.getElementById('email');
  const businessNameInput = document.getElementById('business_name');
  const inputStateSelect = document.getElementById('inputState');
  const inputDistrictSelect = document.getElementById('inputDistrict');
  const servicesList = document.querySelectorAll('#list1 input[type="checkbox"]');
  const fromTimeInput = document.getElementById('hour-input1');
  const toTimeInput = document.getElementById('hour-input2');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    removeErrorMessages(); // Remove previous error messages
    if (validateForm()) {

      // Prepare the data for AJAX request
      const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        whatsapp: document.getElementById('whatsapp').value,
        email: document.getElementById('email').value,
        businessName: document.getElementById('business_name').value,
        state: document.getElementById('inputState').value,
        district: document.getElementById('inputDistrict').value,
        services: getSelectedServices().toString(),
        fromTime: document.getElementById('hour-input1').value,
        toTime: document.getElementById('hour-input2').value
      };
    //   console.log(formData);
      // Make an AJAX request to the backend
      $.ajax({
        url: '/contact',
        method: 'post',
        dataType: 'json',
        data: formData,
        success: function (response) {
            if (response.success) {
                console.log('Success');
                // console.log(response.data);
                form.reset(); // Reset the form
                document.location.replace('/u23eyey-u9lRtKw-eKpA3G-e283ye-gyt45yt-vzN7jP2-QtVtRb-g8u#thankyou');
            }
          },
          error: function (response) {
            console.log('Error');
            console.log(response);
          }
      })
    //   fetch('/contact', {
    //     method: 'POST',
    //     body: formData
    //   })
    //   .then(response => {
    //     if (response.ok) {
    //       // Request was successful
    //       alert('Form submitted successfully.');
    //       form.reset(); // Reset the form
    //     } else {
    //       // Request failed
    //       alert('Form submission failed.');
    //     }
    //   })
    //   .catch(error => {
    //     alert('An error occurred while submitting the form.');
    //   });
    }
  });

  function validateForm() {
    let isValid = true;
    if (nameInput.value.trim() === '') {
      isValid = false;
      displayError(nameInput, 'Name is required.');
    }
    if (phoneInput.value.trim() === '') {
      isValid = false;
      displayError(phoneInput, 'Phone is required.');
    }
    if (whatsappInput.value.trim() === '') {
      isValid = false;
      displayError(whatsappInput, 'Whatsapp is required.');
    }
    if (emailInput.value.trim() === '') {
      isValid = false;
      displayError(emailInput, 'Email is required.');
    }
    if (businessNameInput.value.trim() === '') {
      isValid = false;
      displayError(businessNameInput, 'Business Name is required.');
    }
    if (inputStateSelect.value === 'SelectState') {
      isValid = false;
      displayError(inputStateSelect, 'Please select a state.');
    }
    if (!Array.from(servicesList).some(input => input.checked)) {
      isValid = false;
      const servicesListMain = document.getElementById('list1');
      displayError(servicesListMain, 'Select at least one service.');
    //   displayError(servicesList[0], 'Select at least one service.');
    }
    if (fromTimeInput.value.trim() === '') {
      isValid = false;
      displayError(fromTimeInput, 'From time is required.');
    }
    if (toTimeInput.value.trim() === '') {
      isValid = false;
      displayError(toTimeInput, 'To time is required.');
    }
    // Add more validation as needed
    
    return isValid;
  }

  function displayError(element, message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = 'red';
    element.parentNode.appendChild(errorElement);
  }

  function removeErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.remove());
  }

  function getSelectedServices() {
    const servicesCheckboxes = document.querySelectorAll('#list1 input[type="checkbox"]');
    const selectedServices = [];

    servicesCheckboxes.forEach(checkbox => {
      if (checkbox.checked) {
        selectedServices.push(checkbox.value);
      }
    });

    return selectedServices;
  }
});

