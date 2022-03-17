class DashboardPage {
    get TenantName () {return $('.styles_profileName__ob2HB')};
    get Dropdown_Button () {return $('.styles_dropdownMenu__J9QIj')};
    get LogOut_Button () {return $('.styles_dropdownBtn__TkE8S')};
    get EAM_link () {return $('a[href="/eam"]')};
    get BS_link () {return $('a[href="/bs"]')};
    get SC_link () {return $('a[href="/sc"]')};
    get SLC_link () {return $('a[href="/slc"]')};
    get Logo () {return $('img[alt="logo"]')};
}
module.exports = DashboardPage;