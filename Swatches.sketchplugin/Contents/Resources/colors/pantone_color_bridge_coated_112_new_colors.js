var init_pantone_color_bridge_coated_new_colors = function(title) {
    var colors = [
        ["3514 CP", "ECAE00"],
        ["3596 CP", "DCB37F"],
        ["3547 CP", "C38726"],
        ["3588 CP", "E27E2E"],
        ["3564 CP", "DE652B"],
        ["2428 CP", "DD852B"],
        ["2429 CP", "C95C31"],
        ["2430 CP", "D49973"],
        ["2431 CP", "DF9358"],
        ["2432 CP", "E08E5F"],
        ["2433 CP", "DB7453"],
        ["2434 CP", "DF715F"],
        ["2435 CP", "CA7661"],
        ["2436 CP", "BE4B3D"],
        ["2437 CP", "EBBD9D"],
        ["2438 CP", "E6A181"],
        ["2439 CP", "CA8772"],
        ["2440 CP", "BD9891"],
        ["2441 CP", "A96958"],
        ["2442 CP", "A45851"],
        ["2443 CP", "942D1E"],
        ["3544 CP", "E4BBA9"],
        ["2444 CP", "E0A69E"],
        ["3519 CP", "E6A5A7"],
        ["3572 CP", "E59D95"],
        ["2445 CP", "E18590"],
        ["2446 CP", "D58890"],
        ["2447 CP", "AE6772"],
        ["2448 CP", "D95941"],
        ["3556 CP", "DA3E1F"],
        ["3516 CP", "D93D1F"],
        ["3546 CP", "C91C1F"],
        ["3517 CP", "C51C1F"],
        ["3523 CP", "76302E"],
        ["2449 CP", "4C221A"],
        ["3568 CP", "E9BECA"],
        ["3595 CP", "E7B2C4"],
        ["2450 CP", "D93D85"],
        ["3527 CP", "C82E84"],
        ["3582 CP", "CA689A"],
        ["2451 CP", "BD4474"],
        ["2452 CP", "C73672"],
        ["2453 CP", "BD9AC0"],
        ["3520 CP", "AC7EB0"],
        ["3559 CP", "7E4990"],
        ["3593 CP", "9066A2"],
        ["3575 CP", "9071AA"],
        ["3543 CP", "9E8BBA"],
        ["3515 CP", "5D2773"],
        ["3558 CP", "949CC7"],
        ["3555 CP", "4E2B78"],
        ["3583 CP", "4F2D7C"],
        ["3574 CP", "504174"],
        ["3566 CP", "422863"],
        ["3535 CP", "482B79"],
        ["3542 CP", "3E2B74"],
        ["3506 CP", "0057A0"],
        ["3590 CP", "385094"],
        ["3584 CP", "3D457B"],
        ["3591 CP", "27347D"],
        ["3597 CP", "1F356F"],
        ["3581 CP", "28336D"],
        ["3524 CP", "28264B"],
        ["3577 CP", "7DB2D1"],
        ["3545 CP", "00AED3"],
        ["3551 CP", "009EBE"],
        ["3538 CP", "008ACC"],
        ["3553 CP", "006FAD"],
        ["2454 CP", "137CA1"],
        ["3526 CP", "798D95"],
        ["2455 CP", "96C0B6"],
        ["3533 CP", "70C2B7"],
        ["3534 CP", "00A298"],
        ["2456 CP", "009C8B"],
        ["3560 CP", "009B93"],
        ["3557 CP", "00797E"],
        ["3541 CP", "0098A6"],
        ["2457 CP", "89A797"],
        ["2458 CP", "649A82"],
        ["2459 CP", "44B498"],
        ["2460 CP", "5DB1AC"],
        ["2461 CP", "00968F"],
        ["2462 CP", "528C81"],
        ["2463 CP", "587270"],
        ["2464 CP", "6CB75C"],
        ["2465 CP", "037332"],
        ["3522 CP", "008B43"],
        ["3536 CP", "008945"],
        ["3500 CP", "007236"],
        ["3537 CP", "004625"],
        ["2466 CP", "1B4946"],
        ["3570 CP", "BCC900"],
        ["3507 CP", "B1C500"],
        ["3561 CP", "88B613"],
        ["3501 CP", "4CA42B"],
        ["3529 CP", "349F2E"],
        ["3539 CP", "36982C"],
        ["3508 CP", "537622"],
        ["3599 CP", "DBBC73"],
        ["2467 CP", "BC9264"],
        ["2468 CP", "9E6C40"],
        ["2469 CP", "8E511F"],
        ["2470 CP", "997D5A"],
        ["2471 CP", "A6876E"],
        ["2472 CP", "52331B"],
        ["2473 CP", "C6BBBC"],
        ["2474 CP", "B7A89F"],
        ["2475 CP", "A28B83"],
        ["2476 CP", "87716F"],
        ["2477 CP", "6E554D"],
        ["2478 CP", "3D2629"],
        ["2479 CP", "2F241D"]
    ];

    $(document).ready(function(){

        removeSwatches();

        for (var i = 0; i < colors.length; i ++) {
            var hex = colors[i][1];
            var name = colors[i][0];
            $("#swatches").append(
                '<li><button class="palette name" onclick="window.location.hash=\'' + hex + '\'" title="' + name + '" style="background:#' + hex + ';">' + hex + '</button></li>'
            );
        }

        initSwatches(title);

    });

};
