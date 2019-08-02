function throwProject(){
  $('.catchProject').each(generateProject => {

    $('.displayProject').html(
      `
      <div class="row">
        <div class="column">
        <section>
            <div class="project p1">
            
              <ul>
        <li><strong>${STORE[0].project}</strong></li>
        <li><a href="${STORE[0].thumb}" target="_blank"><img src="${STORE[0].thumb}"></a></li>
        <li><a href="${STORE[0].app}" target="_blank">App Demo</a></li>
        <li><a href="${STORE[0].repo}" target="_blank">Repository</a></li>
        <li>${STORE[0].skills}</li>
        <li class="desc">${STORE[0].desc}</li>
              </ul>
            </div>
        </section>
        </div>

        <div class="column">
        <section>
            <div class="project p2">

            <ul>
        <li><strong>${STORE[1].project}</strong></li>
        <li><a href="${STORE[1].thumb}" target="_blank"><img src="${STORE[1].thumb}"></a></li>
        <li><a href="${STORE[1].app}" target="_blank">App Demo</a></li>
        <li><a href="${STORE[1].repo}" target="_blank">Repository</a></li>
        <li>${STORE[1].skills}</li>
        <li class="desc">${STORE[1].desc}</li>
            
           </div>
        </section>
        </div>
      </div>
      <div class="row">
        <div class="column">
        <section>
            <div class="project p3">

            </div>
        </section>
        </div>
      <div class="column">
        <section>
            <div class="project p4">
            
           </div>
        </section>
        </div>
      </div>
      `
      );
  });
  
}

function showDesc(){

$('.project.p1').mouseenter(function(event) {

	$('.project.p1 ul li.desc').show();
});
$('.project.p2').mouseenter(function(event) {

	$('.project.p2 ul li.desc').show();
});

$('.project.p3').mouseenter(function(event) {

	$('.project.p3 ul li.desc').show();
});

$('.project.p4').mouseenter(function(event) {

	$('.project.p4 ul li.desc').show();
});

$('.project').mouseleave(function(event) {

	$('.project li.desc').hide();
});

}

function sendProject(){
  throwProject();
  showDesc();
  //more to come
  
}

$(sendProject);