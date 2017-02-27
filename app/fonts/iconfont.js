;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-gengduo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M121.7444 391.7568c-65.493 0-118.5894 53.0729-118.5894 118.5894 0 65.493 53.0964 118.5659 118.5894 118.5659s118.5894-53.0729 118.5894-118.5659C240.3338 444.8307 187.2374 391.7568 121.7444 391.7568zM499.9741 391.7568c-65.493 0-118.5894 53.0729-118.5894 118.5894 0 65.493 53.0964 118.5659 118.5894 118.5659s118.5894-53.0729 118.5894-118.5659C618.5636 444.8307 565.4671 391.7568 499.9741 391.7568zM901.845 391.7568c-65.493 0-118.5905 53.0729-118.5905 118.5894 0 65.493 53.0975 118.5659 118.5905 118.5659s118.5894-53.0729 118.5894-118.5659C1020.4334 444.8307 967.338 391.7568 901.845 391.7568z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shanchu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M693.970944 231.906304c33.959936 4.780032 69.298176-1.37216 97.028096 3.345408 44.90752 7.640064 67.670016 45.82912 62.736384 102.047744-18.123776 0-36.245504 0-54.372352 0-1.531904 99.728384-0.833536 198.555648-0.833536 298.615808 0 50.50368 4.205568 103.617536-0.835584 148.888576-4.769792 42.800128-36.119552 68.866048-74.445824 75.282432-37.791744 6.326272-87.942144 1.673216-129.649664 1.673216-87.457792 0-176.078848 1.693696-261.8112 0-41.751552-0.826368-72.511488-14.076928-91.173888-39.315456-18.664448-25.23648-16.729088-63.427584-16.729088-108.737536 0-126.232576 0-251.404288 0-376.40704-17.288192 0-34.57536 0-51.861504 0-8.421376-51.725312 13.971456-88.896512 51.861504-101.211136 27.851776-9.054208 64.98304-1.7408 104.55552-4.182016-3.19488-55.675904-0.186368-97.969152 47.679488-103.72096 21.392384-2.571264 49.959936 0 76.115968 0 47.161344 0 101.813248 0 152.237056 0 29.026304 0 58.730496-2.801664 73.608192 10.037248C698.684416 156.007424 693.289984 196.973568 693.970944 231.906304zM380.29824 183.391232c0 16.729088 0 33.458176 0 50.187264 87.2704 0 174.5408 0 261.810176 0 0-17.565696 0-35.131392 0-52.696064-86.989824 0-173.983744 0-260.974592 0C380.158976 181.02272 380.225536 182.204416 380.29824 183.391232zM329.274368 343.154688c0 105.859072 0 211.275776 0 318.690304 0 27.22304-6.258688 85.224448 10.037248 97.02912 6.482944 4.697088 23.19872 5.390336 30.949376 0 16.86016-11.718656 10.873856-68.069376 10.873856-96.192512 0-108.795904 0-219.029504 0-322.036736-17.006592 0-34.016256 0-51.023872 0C329.136128 340.785152 329.201664 341.966848 329.274368 343.154688zM484.854784 343.154688c0 95.297536 0 206.577664 0 308.653056 0 24.351744-5.6576 81.993728 4.182016 98.702336 6.501376 11.03872 28.381184 16.043008 39.313408 7.529472 14.824448-11.544576 8.36608-72.590336 8.36608-97.865728 0-109.07136 0-213.696512 0-319.526912-17.007616 0-34.018304 0-51.024896 0C484.716544 340.785152 484.783104 341.966848 484.854784 343.154688zM642.108416 343.154688c0 102.566912 0 216.736768 0 322.873344 0 33.067008-6.44608 83.785728 15.055872 92.84608 9.362432 3.946496 25.977856 0.893952 30.111744-2.507776 14.038016-11.556864 7.530496-73.517056 7.530496-97.865728 0-108.521472 0-212.59264 0-317.853696-17.288192 0-34.576384 0-51.861504 0C641.970176 340.785152 642.036736 341.966848 642.108416 343.154688z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fenlei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M196.277147 225.916333c0 12.674671-10.264182 22.950711-22.951652 22.950711L87.253731 248.867044C74.567285 248.867044 64.300033 238.58998 64.300033 225.916333l0-86.069261C64.300033 127.172401 74.567285 116.895337 87.253731 116.895337l86.071764 0c12.68747 0 22.951652 10.276041 22.951652 22.950711L196.277147 225.916333z"  ></path>' +
    '' +
    '<path d="M959.45027 225.916333c0 12.674671-10.265205 22.950711-22.951652 22.950711L311.040523 248.867044c-12.686447 0-22.952675-10.276041-22.952675-22.950711l0-86.069261c0-12.674671 10.266228-22.950711 22.952675-22.950711l625.458095 0c12.685423 0 22.951652 10.276041 22.951652 22.950711L959.45027 225.916333z"  ></path>' +
    '' +
    '<path d="M196.277147 532.893866c0 12.674671-10.264182 22.951735-22.951652 22.951735L87.253731 555.845601C74.567285 555.845601 64.300033 545.568537 64.300033 532.893866l0-86.069261c0-12.674671 10.266228-22.951735 22.952675-22.951735l86.071764 0c12.68747 0 22.951652 10.276041 22.951652 22.951735L196.276124 532.893866z"  ></path>' +
    '' +
    '<path d="M959.45027 532.893866c0 12.674671-10.265205 22.951735-22.951652 22.951735L311.040523 555.845601c-12.686447 0-22.952675-10.277064-22.952675-22.951735l0-86.069261c0-12.674671 10.266228-22.951735 22.952675-22.951735l625.458095 0c12.685423 0 22.951652 10.276041 22.951652 22.951735L959.45027 532.893866z"  ></path>' +
    '' +
    '<path d="M196.277147 839.871399c0 12.674671-10.264182 22.951735-22.951652 22.951735L87.253731 862.823134C74.567285 862.823134 64.300033 852.54607 64.300033 839.871399l0-86.068238c0-12.675694 10.266228-22.952758 22.952675-22.952758l86.071764 0c12.68747 0 22.951652 10.277064 22.951652 22.952758L196.276124 839.871399z"  ></path>' +
    '' +
    '<path d="M959.45027 839.871399c0 12.674671-10.265205 22.951735-22.951652 22.951735L311.040523 862.823134c-12.686447 0-22.952675-10.277064-22.952675-22.951735l0-86.068238c0-12.675694 10.266228-22.952758 22.952675-22.952758l625.458095 0c12.685423 0 22.951652 10.277064 22.951652 22.952758L959.45027 839.871399z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-msnui-cart-full" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M361.804 775.149q17.361 0 32.894 6.397t26.954 17.817 18.274 26.954 6.853 32.894-6.853 32.894-18.274 26.954-26.954 18.274-32.894 6.853q-18.274 0-33.808-6.853t-26.954-18.274-18.274-26.954-6.853-32.894 6.853-32.894 18.274-26.954 26.954-17.817 33.808-6.397zM741.908 776.977q17.361 0 33.35 6.397t27.411 17.817 18.274 26.954 6.853 32.894-6.853 32.894-18.274 26.954-27.411 18.274-33.35 6.853-32.894-6.853-26.954-18.274-18.274-26.954-6.853-32.894 6.853-32.894 18.274-26.954 26.954-17.817 32.894-6.397zM895.412 257.988q25.584 0 39.746 6.853t20.102 16.904 5.481 21.472-3.197 19.645-11.878 33.808-19.645 56.194-21.015 60.761-16.904 47.513q-11.878 36.548-29.696 50.71t-44.315 14.162h-479.699l12.792 82.234h461.425q43.858 0 43.858 37.463 0 18.274-8.68 31.523t-34.264 13.249h-478.784q-18.274 0-30.609-8.224t-20.559-21.472-13.249-28.781-7.766-29.238q-0.914-5.481-5.026-26.499t-10.051-52.538-13.249-70.356-14.62-78.121q-17.361-92.286-39.29-205.586h-68.529q-13.707 0-22.843-6.853t-15.076-16.446-8.224-20.559-2.284-20.102q0-18.274 12.335-30.153t33.35-11.878h92.286q18.274 0 29.238 5.481t17.361 13.707 9.137 17.361 4.569 15.534q1.827 7.31 3.655 20.559t3.655 26.954q2.742 16.446 5.481 34.721h624.979zM826.884 228.75h-334.418l120.61-120.61q21.015-21.015 46.142-21.472t46.142 20.559z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-you" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M642.174253 504.59418C650.164439 511.835287 650.070886 522.174253 641.84009 529.376198L332.618569 799.94503C323.751654 807.703582 322.853148 821.181184 330.611697 830.048098 338.370249 838.915012 351.847851 839.813519 360.714765 832.05497L669.936288 561.486138C697.36486 537.486138 697.727953 497.358861 670.825747 472.978737L360.992414 192.192278C352.26205 184.280386 338.770837 184.943889 330.858944 193.674252 322.947053 202.404616 323.610556 215.895829 332.340919 223.807723L642.174253 504.59418Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fanhui" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M622.650611 284.901749 447.745069 284.901749 447.745069 142.823869 63.980685 334.705038l383.76336 191.882192L447.744046 384.834762l189.391465 0c149.914358 0 224.855164 62.789045 224.855164 188.368158 0 129.928165-77.435627 194.876386-232.338602 194.876386L187.952184 768.079306l0 99.93199L634.146433 868.011296c211.184817 0 316.777737-95.104031 316.777737-285.311071C950.924169 384.178823 841.510224 284.901749 622.650611 284.901749z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouyeshouye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M519.232 64 64 523.648l143.616 0L207.616 960l234.112 0-0.96-292.032 145.664 0 0 291.008 230.144 0L816.576 524.736 960 524.736 519.232 64z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fangdajing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M938.702823 949.442934c-12.637832 12.472056-33.090653 12.472056-45.708018 0L686.589852 745.571686c17.168008-13.011338 33.340339-27.187199 48.263214-42.611493L938.702823 904.294664C951.320189 916.765697 951.320189 936.990321 938.702823 949.442934zM431.377286 767.604492c-196.365296 0-355.544669-157.267836-355.544669-351.200734 0-193.974853 159.180396-351.200734 355.544669-351.200734 196.34483 0 355.526249 157.225881 355.526249 351.200734C786.902512 610.337679 627.722116 767.604492 431.377286 767.604492zM431.377286 129.057331c-160.653957 0-290.899346 128.624473-290.899346 287.346427 0 158.681022 130.24539 287.34745 290.899346 287.34745 160.657027 0 290.880927-128.665405 290.880927-287.34745C722.258213 257.681804 592.034313 129.057331 431.377286 129.057331z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M961.639209 283.628756c0 2.684132-0.168846 5.196349-0.512676 7.532557-0.342808 2.337231-0.676405 4.51892-0.997724 6.53688-0.324388 2.015913-0.828878 4.037966-1.51347 6.054903l-12.075013 33.186843-19.1215 55.340399-21.116947 59.360969c-8.712429 25.492604-14.077623 41.257659-16.09456 47.290049-4.033873 11.392468-8.565073 21.289885-13.583366 29.676903-5.021364 8.394181-10.559497 14.930037-16.615423 19.608593-12.078083 9.398044-26.833135 14.093996-44.26311 14.093996L336.895425 562.310849l14.100136 80.480986 458.731796 0c29.509081 0 44.265156 12.403494 44.265156 37.216623 0 12.082176-3.01466 22.478967-9.04705 31.190373-5.366218 8.712429-16.773012 13.072737-34.220383 13.072737l-477.853295 0c-4.033873 0-7.884574-0.335644-11.558244-0.99977-3.668553-0.665149-7.024997-1.503237-10.075473-2.51017-3.045359-1.00898-5.898337-2.524496-8.559956-4.541433-8.045233-5.366218-14.756075-12.403494-20.120246-21.11797-2.684132-4.03285-5.195326-8.392134-7.532557-13.07069-2.337231-4.674463-4.514827-9.709129-6.535857-15.095813-3.347235-12.747325-5.698792-22.472827-7.048533-29.160133l-5.021364-26.176173-10.076496-51.311643-13.07069-69.405743-15.09786-77.453023-39.241746-202.195072-68.406996 0c-9.398044 0-16.780175-2.015913-22.149463-6.054903-6.02932-4.696975-11.393491-10.06217-16.09456-16.09456-1.348718-4.03285-2.864234-7.724938-4.53734-11.072173-1.674129-3.348258-2.844791-6.705726-3.508917-10.075473-0.663102-3.370771-1.170662-6.727215-1.51347-10.076496-0.341784-3.347235-0.51677-6.361895-0.511653-9.046027 0-12.084223 4.019547-22.150486 12.069897-30.194696 4.702092-3.347235 9.732665-6.033413 15.096836-8.049327 5.365194-2.015913 11.405771-3.02694 18.123776-3.02694l92.552929 0c12.082176 0 21.800515 1.674129 29.160133 5.021364 3.348258 2.022053 6.53688 4.037966 9.56382 6.054903 3.022847 2.016937 5.875824 4.367471 8.562003 7.04751 4.03285 6.033413 6.716982 11.732206 8.048303 17.096377l5.02341 16.09456c0.663102 2.686179 1.673106 7.715729 3.022847 15.09786l0 5.022387 4.024663 26.173103 5.021364 34.220383 428.205549 0L522.37172 418.309154 403.56894 296.215422c-12.335956-12.69002-33.022091-11.987009-46.212508 1.559519-13.190417 13.548574-13.877055 34.81083-1.526773 47.499827l145.219429 149.237953c12.33391 12.671601 33.062 10.358929 46.252417-3.186576 3.0208-3.103688 9.547447-10.636245 10.730389-11.835559L797.326932 239.374856l98.868775 0 0.062422-0.00921c17.449417 0 30.858822 2.351558 40.23947 7.052626 4.702092 2.016937 8.721639 4.367471 12.069897 7.046486 3.347235 2.686179 6.033413 5.698792 8.05035 9.048073C960.649672 269.229814 962.324824 276.269138 961.639209 283.628756zM293.112246 785.114285c3.006474-4.357238 6.52767-8.55177 10.56052-12.589736 2.685155-2.680039 5.698792-5.03262 9.046027-7.04751l8.05035-6.055926c3.347235-2.016937 6.703679-3.689019 10.073426-5.022387 2.681062-0.661056 5.366218-1.499144 8.051373-2.51017 2.680039-1.004887 5.364171-1.683339 8.04421-2.025123 2.684132-0.343831 5.539156-0.677429 8.566096-0.99977 3.02387-0.320295 5.876847-0.491187 8.562003-0.515746l0.031722 0.031722c11.392468 0 22.455431 2.016937 33.189913 6.053879 10.06217 4.034896 19.11843 10.075473 27.166733 18.119683 4.03285 4.03899 7.556093 8.232498 10.56052 12.591783 3.006474 4.355191 5.517667 8.882298 7.532557 13.582343 4.701069 10.730389 7.048533 21.633716 7.048533 32.705889 0 11.076266-2.346441 21.63781-7.048533 31.67849-4.03285 9.402137-10.075473 18.457374-18.123776 27.171849-8.05035 7.381108-17.265222 13.252839-27.652803 17.60803-10.386558 4.357238-21.289885 6.53381-32.704866 6.53381-12.084223 0-23.147186-2.01489-33.19196-6.049786-10.066263-4.701069-19.122523-10.740622-27.170826-18.123776-8.045233-8.712429-14.08581-17.767666-18.119683-27.171849-4.037966-10.067286-6.054903-20.621667-6.054903-31.676443 0-11.050684 2.016937-21.952988 6.054903-32.705889C287.600719 793.995559 290.106796 789.470499 293.112246 785.114285zM665.895531 800.759613c4.03285-9.398044 10.075473-18.123776 18.124799-26.174126 3.347235-4.03285 7.367805-7.55507 12.069897-10.556427 4.696975-3.004427 9.398044-5.514597 14.099113-7.532557 3.348258-1.350764 6.865361-2.52245 10.561543-3.507894 3.689019-0.98749 7.380084-1.664919 11.070126-2.030239 3.691065-0.36532 7.54279-0.533143 11.559267-0.511653l-0.034792-0.035816c5.368264 0 10.902304 0.503467 16.609283 1.514493 5.712095 1.006933 11.246135 2.520403 16.610306 4.53734 10.734482 4.03285 19.789719 10.075473 27.171849 18.123776 8.049327 8.05035 14.421454 16.773012 19.123546 26.174126 4.031826 10.063193 6.054903 20.791535 6.054903 32.190143 0 5.364171-0.508583 10.902304-1.51347 16.610306-1.011027 5.708002-2.52552 10.904351-4.541433 15.581883-4.696975 9.400091-11.073196 18.453281-19.123546 27.167756-7.382131 7.387247-16.437367 13.080923-27.166733 17.096377-10.066263 4.703115-21.13025 7.04751-33.190937 7.04751-12.06171 0-23.125697-2.344395-33.19196-7.04751-10.728342-4.701069-19.451004-10.400884-26.169009-17.096377-8.049327-8.714476-14.09195-17.767666-18.124799-27.167756-4.701069-10.067286-7.05365-20.795629-7.05365-32.19219 0-5.364171 0.508583-10.730389 1.514493-16.095583C661.368424 811.490002 663.210375 806.125831 665.895531 800.759613z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-minus" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M789.848 325.204l-277.848 277.848-277.848-277.848-46.303 46.303 324.151 324.151 324.151-324.151-46.303-46.303z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wode5" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M443.206843 15.478499c-35.601775 0-30.121981 15.663717-49.285398 18.353983-19.172627 2.69436 3.875253-7.574497-53.624208 3.199872-57.494344 10.788696-77.801815 83.526178-80.542223 110.477963-2.734269 26.932342-3.419882 102.679362-1.599424 143.104993 5.47877 24.237982-13.683623 24.237982-13.683623 24.237982-34.451581-2.169405-18.967966 103.484702-18.967966 103.484702 4.954839 26.036951-1.779526 39.005284 49.240373 59.178702 24.297334 68.113171 87.77596 104.139617 87.77596 104.139617s0.320294-6.719015 1.280153 24.392501c-5.189175-2.543934 42.104873 79.527106-116.362985 102.549402-158.479114 23.002854-188.815989 122.287916-218.692377 150.384778-29.881505 28.136771-28.716984 164.4767-28.716984 164.4767l1022.733149 0.540305c0 0-7.599057-136.881257-37.475445-165.018028-29.872295-28.096862-62.4236-127.381924-220.886341-150.384778-154.06458-21.933501-104.355534-102.849231-105.44433-107.693552 0.284479-12.263277 1.954511-15.498965 1.954511-15.498965s53.799193-41.785602 78.09141-109.918216c38.245993-23.763169 52.808634-27.072535 59.133677-54.443874 0 0 11.243043-106.743926-24.862198-106.199528 0 0-17.113739 5.410209-11.633945-18.847216 5.474677-24.252308 3.654219-99.990119 0.909717-126.93167-2.739385-26.947692 1.389647-103.959516-56.103674-114.749235-39.245761-7.184618-44.369445-0.064468-63.532862-2.749618-19.163417-2.705616-66.364344-51.56532-101.959979-51.56532L443.206843 15.478499z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)