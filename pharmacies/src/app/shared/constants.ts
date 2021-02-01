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

    //pharmacist profile
    public static pharmacistProfileUrl = Constants.baseUrl + "/pharm/get";
    //pharmacist personal info update
    public static pharmacistUpdateUrl = Constants.baseUrl + "/pharm/update";
    //pharmacist change password
    public static pharmacistPasswordUrl = Constants.baseUrl + "/pharm/changePassword";
    //pharmacist patient search
    public static pharmacistSearchUrl = Constants.baseUrl + "/pharm/patients";
}
