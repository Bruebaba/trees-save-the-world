function goodcause() {
    var givenCause = document.getElementById('savewhat').value;
    if (givenCause != '') {
        var causeOutput = 'we msut save the ' + givenCause + '!';
        document.getElementById('saveit').innerText = causeOutput;
    } else {
        document.getElementById('savewhat')
        style.borderColor = 'red';
    }
}