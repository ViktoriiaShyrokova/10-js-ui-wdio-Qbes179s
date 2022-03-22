
class EAM {

    get Name_Field () {return $('input[name="name"]')};
    get Save_Button () {return $('button[type="submit"]')};
    get AddWorker_Button () {return $('a[href="/eam/create-worker"]')};
    get AddGroup_Button () {return $('a[href="/eam/configurate-group"]')};
    get Logo () {return $('img[alt="logo"]')};
    get Groups () {return $$('.checkbox_span__Kuugs')};
    get SaveCSV_Button () {return $('.styles_saveBtn__jQ6gL')}
    get LastWorker () {return $$('.styles_tableCell__C6dnh')}

}
module.exports = EAM;
