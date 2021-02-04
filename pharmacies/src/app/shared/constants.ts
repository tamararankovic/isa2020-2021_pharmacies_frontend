export class Constants {
    public static baseUrl = "http://localhost:8081";

    //role names
    public static patientRole = "PATIENT";
    public static dermatologistRole = "DERMATOLOGIST";
    public static pharmacistRole = "PHARMACIST";
    public static pharmacyAdminRole = "PHARMACY_ADMIN";
    public static systemAdminRole = "SYSTEM_ADMIN";
    public static supplierRole = "SUPPLIER";
    
    //unauthenticated user
    public static loginUrl = Constants.baseUrl + "/auth/login";
    public static registerUrl = Constants.baseUrl + "/auth/register";
    public static changePasswordUrl = Constants.baseUrl + "/auth/changePassword";

    //system admin
    public static registerSupplierUrl = Constants.baseUrl + "/admin/registerSupplier";
    public static registerAdminUrl = Constants.baseUrl + "/admin/registerSystemAdmin";
    public static registerPharmacyAdminUrl = Constants.baseUrl + "/admin/registerPharmacyAdmin";
    public static registerPharmacyUrl = Constants.baseUrl + "/admin/registerPharmacy";
    public static registerDermatologistUrl = Constants.baseUrl + "/admin/registerDermatologist";
    public static getAllPharmaciesUrl = Constants.baseUrl + "/admin/getPharmacies";
    public static getAllMedicinesUrl = Constants.baseUrl + "/admin/getMedicines";
    public static addNewMedicineUrl = Constants.baseUrl + "/admin/addNewMedicine";

    //authenticated user
    public static logoutUrl = Constants.baseUrl + "/auth/logout";

    //patient
    public static getPharmacyInfoUrl = Constants.baseUrl + "/pharmacy/info/";

    //dermatologist profile
    public static dermatologistProfileUrl = Constants.baseUrl + "/derm/get";
    //dermatologist change password
    public static dermatologistPasswordUrl = Constants.baseUrl + "/derm/changePassword";
    //dermatologist personal info update
    public static dermatologistUpdateUrl = Constants.baseUrl + "/derm/update";
    //dermatologist patient search
    public static dermatologistSearchUrl = Constants.baseUrl + "/derm/patients";
    //dermatologist appointment dto
    public static dermatologistAppointmentUrl = Constants.baseUrl + "/derm/appointment";
    //dermatologist get medicine list
    public static dermatologistGetMedicineUrl = Constants.baseUrl + "/derm/medicine";
    //dermatologist fill report
    public static dermatologistSaveReportUrl = Constants.baseUrl + "/derm/report";
    //dermatologist if patient is allergic
    public static dermatologistAllergicUrl = Constants.baseUrl + "/derm/allergies";
    //dermatologist check medicine quantity
    public static dermatologistCheckMedicineQuantityUrl = Constants.baseUrl + "/derm/medicine/isAvailable";
    //dermatologist check for compatible medicine
    public static dermatologistCompatibleUrl = Constants.baseUrl + "/derm/medicine/compatible";
    //dermatologist and pharmacist medicine details
    public static dermatologistMedicineDetailsUrl = Constants.baseUrl + "/derm/medicineDetails";

    //pharmacist profile
    public static pharmacistProfileUrl = Constants.baseUrl + "/pharm/get";
    //pharmacist personal info update
    public static pharmacistUpdateUrl = Constants.baseUrl + "/pharm/update";
    //pharmacist change password
    public static pharmacistPasswordUrl = Constants.baseUrl + "/pharm/changePassword";
    //pharmacist appointment dto
    public static pharmacistAppointmentUrl = Constants.baseUrl + "/pharm/appointment";
    //pharmacist get medicine list
    public static pharmacistGetMedicineUrl = Constants.baseUrl + "/pharm/medicine";
    //pharmacist fill report
    public static pharmacistSaveReportUrl = Constants.baseUrl + "/pharm/report";
    //pharmacist if patient is allergic
    public static pharmacistAllergicUrl = Constants.baseUrl + "/pharm/allergies";
    //pharmacist check medicine quantity
    public static pharmacistCheckMedicineQuantityUrl = Constants.baseUrl + "/pharm/medicine/isAvailable";
    //pharmacist check for compatible medicine
    public static pharmacistCompatibleUrl = Constants.baseUrl + "/pharm/medicine/compatible";
    //pharmacist check for compatible medicine
    public static pharmacistReservationValidUrl = Constants.baseUrl + "/pharm/reservationValid";
    //pharmacist reservation received
    public static pharmacistReservationUrl = Constants.baseUrl + "/pharm/reservation";
    
    //patients profile
    public static patientsProfileUrl = Constants.baseUrl + "/patient/get";
    //edit patient profile
    public static patientEditUrl = Constants.baseUrl + "/patient/edit";
    //change password
    public static patientPasswordUrl = Constants.baseUrl + "/patient/changePassword";
    //get medicine for allergies
    public static patientMedicineUrl = Constants.baseUrl + "/patient/medicine";
    //pharmacist patient search
    public static pharmacistSearchUrl = Constants.baseUrl + "/pharm/patients";

    //pharmacy admin
    public static dermatologistsUrl = Constants.baseUrl + "/derm";
    public static pharmacistUrl = Constants.baseUrl + "/pharm";
    public static deleteDermUrl = Constants.baseUrl + "/derm/delete/";
    public static deletePharmUrl = Constants.baseUrl + "/pharm/delete/";
    public static searchDermUrl = Constants.baseUrl + "/derm/search/";
    public static searchPharmUrl = Constants.baseUrl + "/pharm/search/";
    public static dermToEmployUrl = Constants.baseUrl + "/derm/get-unemployed-in-pharmacy";
    public static newDermUrl = Constants.baseUrl + "/derm/new-pharmacy";
    public static newPharmUrl = Constants.baseUrl + "/pharm/create";
    public static getPharmacyBasicInfoUrl = Constants.baseUrl + "/pharmacy/basic-info";
    public static updatePharmacyBasicInfoUrl = Constants.baseUrl + "/pharmacy/update";
    public static getPharmacyAdmin = Constants.baseUrl + "/pharmacy-admin";
    public static updatePharmacyAdmin = Constants.baseUrl + "/pharmacy-admin/update";
    public static changePasswordPharmacyAdmin = Constants.baseUrl + "/pharmacy-admin/change-password";
    public static getAllMedicinesForPharmacyAdminUrl = Constants.baseUrl + "/medicine/by-pharmacy";
    public static newOrderUrl = Constants.baseUrl + "/order/new";
    public static getOrdersUrl = Constants.baseUrl + "/order";
    public static chooseOrderWinnerUrl = Constants.baseUrl + "/order/choose-winner";
}
