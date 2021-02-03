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

    //pharmacist profile
    public static pharmacistProfileUrl = Constants.baseUrl + "/pharm/get";
    //pharmacist personal info update
    public static pharmacistUpdateUrl = Constants.baseUrl + "/pharm/update";
    //pharmacist change password
    public static pharmacistPasswordUrl = Constants.baseUrl + "/pharm/changePassword";
    //pharmacist patient search
    public static pharmacistSearchUrl = Constants.baseUrl + "/pharm/patients";
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
}
