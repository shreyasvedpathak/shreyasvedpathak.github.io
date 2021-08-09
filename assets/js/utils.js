function renderSkills(skills) {
  for (var skill in skills) {
    var icon = skills[skill];
    var url = `assets/img/logos/${icon}.svg`;

    document.writeln(`
            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-6">
                <div class="shadow card skill-card my-2">
                    <img height="50px" class="m-2" src=${url}>
                    <div class="card-footer text-center text-white bg-dark">
                        <small class="card-text fw-bold">${skill}</small>
                    </div>
                </div>
            </div>
        `);
  }
}

function addCard(data) {
  var type = data["type"];
  var image = data["image"];
  var title = data["title"];
  var link = data["link"];
  var date = data["date"];
  var keywords = data["keywords"];

  var colors = [
    "Red",
    "Blue-Grey",
    "Pink",
    "Purple",
    "Deep-Purple",

    "Indigo",
    "Blue",
    "Light-Blue",
    "Cyan",
    "Teal",

    "Green",
    "Light-Green",
    "Lime",
    "Yellow",
    "Amber",

    "Orange",
    "Deep-Orange",
    "Brown",
    "Grey",
    "Blue-Grey",
  ];

  var card_color = colors[5];

  if (type === "paper") {
    card_color = colors[10];
  }

  // document.writeln(`
  //               <div class="col-lg-4 col-md-6 portfolio-item filter-${type}">
  //                   <div class="shadow-lg portfolio-wrap">
  //                       <div class="card text-white bg-${card_color}">
  //                           <img src="assets/img/portfolio/${image}" class="img-fluid" alt="">
  //                           <div style="height: 120px" class="card-header">
  //                               <h5>${title}</h5>
  //                               <small class="fst-italic">${date}</small>
  //                               </div>
  //                           <div class="portfolio-links">
  //                               <a style="background-color: ${bg}" href="${link}" target="_blank" title="More Details"><i style="color: ${txt_col};" class="bx bx-link-external"></i></a>
  //                           </div>
  //                       </div>
  //                   </div>
  //               </div>
  //           `);

  document.writeln(
    `
    <div class="col-lg-4 col-md-6 portfolio-item filter-${type}">
					<article class="material-card ${card_color}">
						<h2 class="title shadow">
							${title}
						</h2>
						<div class="mc-content">
							<div class="img-container shadow">
								<img style="height: 100%;"
									src="assets/img/portfolio/${image}">
							</div>
						</div>
						<div class="mc-description d-flex align-items-end shadow">
            <img style="width: 100%;" class="border-bottom border-dark border-1"
									src="assets/img/portfolio/${image}">
						</div>
						<a class="mc-btn-action shadow">
							<i class="fas fa-bars"></i>
						</a>
						<div class="mc-footer">
              <div class="p-2 my-1">
              `
  );
  for (var i = 0; i < keywords.length; i++) {
    document.writeln(
      `<span class="badge bg-light text-dark shadow">${keywords[i]}</span>`
    );
  }

  document.writeln(`                
              </div>
              <div class="mt-auto">
                <div>
                  <a href="${link}" target="_blank" class="d-grid">
                    <button type="button" class="btn btn-dark rounded-0">Read More</button>
                  </a>
                </div>
              </div>
            </div>
					</article>
				</div>
    `);
}

function addCC(i, title, by, learnings, link) {
  document.writeln(`						
        <div class="accordion-item text-white">
							<h2 class="accordion-header" id="heading${i}">
								<button class="accordion-button bg-body fw-bold collapsed" type="button" data-bs-toggle="collapse"
									data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
									${title}
								</button>
							</h2>
							<div id="collapse${i}" class="accordion-collapse collapse"
								aria-labelledby="heading${i}" data-bs-parent="#accordionExample">
								<div class="accordion-body bg-primary">
									<div class="row px-3">
										<div>
											<h6 class="">Offered by : ${by}</h6>
										</div>									
										<div>
											<h6 class="">Learnings :</h6>
											<ul class="cc">						
    `);

  for (var i = 0; i < learnings.length; i++) {
    document.writeln(`<li>${learnings[i]}</li>`);
  }

  document.writeln(`</ul>
										</div>
										<div class="py-4">
											<a href="${link}">
												<button type="button" class="btn btn-light btn-sm shadow">Certificate</button>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>`);
}

$(function () {
  $(".material-card > .mc-btn-action").click(function () {
    var card = $(this).parent(".material-card");
    var icon = $(this).children("i");
    icon.addClass("fa-spin-fast");

    if (card.hasClass("mc-active")) {
      card.removeClass("mc-active");
      card.children("h2").css({ "font-size": "1.2rem" });
      window.setTimeout(function () {
        icon
          .removeClass("fa-times")
          .removeClass("fa-spin-fast")
          .addClass("fa-bars");
      }, 600);
    } else {
      card.addClass("mc-active");
      card.children("h2").css({ "font-size": "1rem" });
      window.setTimeout(function () {
        icon
          .removeClass("fa-bars")
          .removeClass("fa-spin-fast")
          .addClass("fa-times");
      }, 600);
    }
  });
});
