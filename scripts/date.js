var makeDate = () => {
    var d = new Date();
    var formattedDate = "";
    formattedDate += (d.getMonth() + 1) + "_";
    formattedDate += d.getDate() + "_";
    formattedDate += d.getFullYear();

};

module.exports = makeDate;