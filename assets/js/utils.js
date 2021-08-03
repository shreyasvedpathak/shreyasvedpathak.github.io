function renderSkills(skills) {
  for (var skill in skills) {
    var icon = skills[skill];
    var url = `assets/img/logos/${icon}.svg`;

    document.writeln(`
            <div class="col-lg-2 col-6">
                <div class="hvr-underline-from-left shadow card skill-card my-2">
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

  var txt_col = "white";

  var card_type = "primary";
  var bg = "#0d6efd";

  if (type === "paper") {
    card_type = "success";
    bg = "#198754";
  }

  document.writeln(`
                <div class="col-lg-4 col-md-6 portfolio-item filter-${type}">
                    <div class="shadow-lg portfolio-wrap">
                        <div class="card text-white bg-${card_type}">	
                            <img src="assets/img/portfolio/${image}" class="img-fluid" alt="">
                            <div style="height: 120px" class="card-header">
                                <h5>${title}</h5>
                                <small class="fst-italic">${date}</small>
                                </div>
                            <div class="portfolio-links">										
                                <a style="background-color: ${bg}" href="${link}" target="_blank" title="More Details"><i style="color: ${txt_col};" class="bx bx-link-external"></i></a>
                            </div>
                        </div>
                    </div>
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
