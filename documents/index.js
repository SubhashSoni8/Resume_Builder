module.exports = ({ name, email, phone, linkedin, github, exp1_org, exp1_pos, exp1_desc, exp2_org, exp2_pos, exp2_desc, 
      
      edu1_school, edu1_year, edu1_qualification, edu1_cgpa,
      edu2_school, edu2_year, edu2_percent, edu3_year, edu3_percent,
      certificate, skill1, skill2, skill3, skill4, skill5, level1, level2, level3, level4, level5,
      extra_1, extra_2, extra_3, extra_4, extra_5 }) => {
      return `
      <!DOCTYPE html>
      <html lang="en">

      <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Template1</title>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css" rel="stylesheet">
      <style>
            
            body {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  margin: 20px 100px;
            }

            .head {
                  background-color: rgb(243, 243, 243);
            }

            .leftshift {
                  padding-left: 10px;
            }

            .left {
                  padding-top: 1em;
                  padding-left: 2%;
                  height: 30vh;
            }

            .right {
                  padding-top: 1em;
                  height: 30vh;
                  padding-left: 10%;
            }

            .name {
                  padding-left: 1em;
                  padding-top: 0.35em;
                  font-weight: 500;
            }

            .bold {
                  font-weight: 550;
            }

            .profile {
                  margin-bottom: 0rem;
            }

            .dashedline {
                  border-top: 1px dashed rgb(206, 200, 200);
                  /* width: 99%; */
            }

            .bolder {
                  font-weight: 700;
            }

            .lightfont {
                  color: rgb(160, 159, 157);
            }

            .description {
                  font-size: 15px;
            }

            
            
      </style>
      </head>
      
      <body class="container">
      <div class="container head ">
            <div class="row col-lg-10">
                  <div class="col-lg-8  text-left  ">
                  <h1 class="name">${name}</h1>
                  </div>
                  <div class="col-lg-3 text-left ">

                  <p class="profile"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              class="bi bi-telephone" viewBox="0 0 16 16">
                              <path
                              d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg></i> +91 ${phone}</p>
                  <p class="profile"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              class="bi bi-envelope" viewBox="0 0 16 16">
                              <path fill-rule="evenodd"
                              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg> ${email}</p>
                  <p class="profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              class="bi bi-linkedin" viewBox="0 0 16 16">
                              <path
                              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg> ${linkedin}
                  </p>
                  <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              class="bi bi-github" viewBox="0 0 16 16">
                              <path
                              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg> ${github}</p>
                  </div>

            </div>
      </div>
      <div class="experience container mx-4 my-3">
            <h5 class="bold">EXPERIANCE</h3>
                  <hr class="dashedline">
                  <h6 class="bolder leftshift">${exp1_pos}</h6>
                  <p class="jobtitle lightfont  leftshift">${exp1_org}</p>
                  <p class="description leftshift">${exp1_desc}</p>
                  <h6 class="bolder leftshift">${exp2_pos}</h6>
                  <p class="jobtitle lightfont leftshift">${exp2_org}</p>
                  <p class="description leftshift">${exp2_desc}</p>
            <h5 class="bold">Education</h3>
                  <hr class="dashedline leftshift">
                  <h6 class="bolder leftshift">${edu1_school}</h6>
                  <p class="jobtitle lightfont leftshift">${edu1_qualification} (${edu1_year}) - ${edu1_cgpa} CGPA</p>

                  <h6 class="bolder leftshift">${edu2_school}</h6>
                  <p class="jobtitle lightfont profile leftshift">XII (${edu2_year}) - ${edu2_percent}%</p>
                  <p class="jobtitle lightfont leftshift">X (${edu3_year})- ${edu3_percent}%</p>
            <h5 class="bold">CERTIFICATES</h3>
                        <hr class="dashedline">
                        <h6 class="bold leftshift">${certificate}</h6>
                        <P></P>
            <h5 class="bold">SKILLS</h3>
                              <hr class="dashedline">
                             
                              <table style="width: 60%;">
                              <tr>
                                    <td><h6 class="bold leftshift ">${skill1} </h6></td>
                                    <td><h6 class="lightfont leftshift ">${level1} </h6></td>
                              </tr>
                              <tr>
                                    <td><h6 class="bold leftshift ">${skill2}</h6></td>
                                    <td><h6 class="lightfont leftshift ">${level2} </h6></td>
                              </tr>
                              <tr>
                                    <td><h6 class="bold leftshift ">${skill3} </h6></td>
                                    <td><h6 class="lightfont leftshift ">${level3} </h6></td>
                              </tr>
                              <tr>
                                    <td><h6 class="bold leftshift ">${skill4} </h6></td>
                                    <td><h6 class="lightfont leftshift ">${level4} </h6></td>
                              </tr>
                              <tr>
                                    <td><h6 class="bold leftshift ">${skill5} </h6></td>
                                    <td><h6 class="lightfont leftshift ">${level5} </h6></td>
                              </tr>
                              </table>
                              <p></p>
            <h5 class="bold">EXTRA-CURRICULARS/ACTIVITIES</h3>
                              <hr class="dashedline leftshift">
                              <div class=" leftshift">
                                    
                                    <p class="extra"><b class="bold">Languages: </b>${extra_1} </p>
                                    <p class="extra"><b class="bold">Hobbies: </b>${extra_2} </p>
                                    <p class="extra">${extra_3} </p></li>
                                    <p class="extra">${extra_4} </p></li>
                                    <p class="extra">${extra_5} </p></li>
                                    
                                    
                              </div>
                              
      </div>
      <!-- JQuery -->
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <!-- Bootstrap tooltips -->
      <script type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
      <!-- Bootstrap core JavaScript -->
      <script type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
      <!-- MDB core JavaScript -->
      <script type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"></script>
      </body>

      </html>
      `;
}
