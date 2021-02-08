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
    public static allPharmaciesUrl = Constants.baseUrl + "/pharmacy/all";
    public static allMedicineUrl = Constants.baseUrl + "/medicine/all";

    //system admin
    public static registerSupplierUrl = Constants.baseUrl + "/admin/registerSupplier";
    public static registerAdminUrl = Constants.baseUrl + "/admin/registerSystemAdmin";
    public static registerPharmacyAdminUrl = Constants.baseUrl + "/admin/registerPharmacyAdmin";
    public static registerPharmacyUrl = Constants.baseUrl + "/admin/registerPharmacy";
    public static registerDermatologistUrl = Constants.baseUrl + "/admin/registerDermatologist";
    public static getAllPharmaciesUrl = Constants.baseUrl + "/admin/getPharmacies";
    public static getAllMedicinesUrl = Constants.baseUrl + "/admin/getMedicines";
    public static addNewMedicineUrl = Constants.baseUrl + "/admin/addNewMedicine";

    //supplier
    public static supplierProfileUrl = Constants.baseUrl + "/supplier/get";
    public static supplierUpdateUrl = Constants.baseUrl + "/supplier/update";
    public static supplierPasswordUrl = Constants.baseUrl + "/supplier/changePassword";
    public static getOrdersSupplierUrl = Constants.baseUrl + "/order/getOrdersSupplier";
    public static createOfferUrl = Constants.baseUrl + "/offer/createOffer";
    public static getAllOffersUrl = Constants.baseUrl + "/offer/getOffers";
    public static supplierUpdateOfferUrl = Constants.baseUrl + "/offer/supplierUpdateOfferUrl";

    //authenticated user
    public static logoutUrl = Constants.baseUrl + "/auth/logout";

    //patient
    public static getPharmacyInfoUrl = Constants.baseUrl + "/pharmacy/info/";
    public static subscribeToPharmacy = Constants.baseUrl + "/patient/benefits/";
    public static getAllSubscribedPharmaciesUrl =  Constants.baseUrl + "/patient/getSubscribedPharmacies";
    public static cancelSubscriptionDto = Constants.baseUrl + "/patient/cancel/";
    public static searchMedicineByNameUrl = Constants.baseUrl + "/medicine/searchMedicine";

    //dermatologist
    public static dermatologistProfileUrl = Constants.baseUrl + "/derm/get";
    public static dermatologistPasswordUrl = Constants.baseUrl + "/derm/changePassword";
    public static dermatologistUpdateUrl = Constants.baseUrl + "/derm/update";
    public static dermatologistSearchUrl = Constants.baseUrl + "/derm/patients";
    public static dermatologistAppointmentUrl = Constants.baseUrl + "/derm/appointment";
    public static dermatologistGetMedicineUrl = Constants.baseUrl + "/derm/medicine";
    public static dermatologistSaveReportUrl = Constants.baseUrl + "/derm/report";
    public static dermatologistAllergicUrl = Constants.baseUrl + "/derm/allergies";
    public static dermatologistCheckMedicineQuantityUrl = Constants.baseUrl + "/derm/medicine/isAvailable";
    public static dermatologistCompatibleUrl = Constants.baseUrl + "/derm/medicine/compatible";
    public static dermatologistMedicineDetailsUrl = Constants.baseUrl + "/derm/medicineDetails";
    public static dermatologistCheckAppointmentUrl = Constants.baseUrl + "/derm/appointment";
    public static dermatologistSaveAppointmentUrl = Constants.baseUrl + "/derm/saveAppointment";
    public static dermatologistExistingAppointmentsUrl = Constants.baseUrl + "/derm/appointments";
    public static dermatologistSaveExistingAppointmentUrl = Constants.baseUrl + "/derm/saveExistingAppointment";
    public static dermatologistPharmaciesUrl = Constants.baseUrl + "/derm/pharmacies";
    public static dermatologistWeekUrl = Constants.baseUrl + "/derm/week";
    public static dermatologistMonthUrl = Constants.baseUrl + "/derm/month";
    public static dermatologistYearUrl = Constants.baseUrl + "/derm/year";
    public static dermatologistNotPresentUrl = Constants.baseUrl + "/derm/notPresent";

    //pharmacist
    public static pharmacistProfileUrl = Constants.baseUrl + "/pharm/get";
    public static pharmacistUpdateUrl = Constants.baseUrl + "/pharm/update";
    public static pharmacistPasswordUrl = Constants.baseUrl + "/pharm/changePassword";
    public static pharmacistAppointmentUrl = Constants.baseUrl + "/pharm/appointment";
    public static pharmacistGetMedicineUrl = Constants.baseUrl + "/pharm/medicine";
    public static pharmacistSaveReportUrl = Constants.baseUrl + "/pharm/report";
    public static pharmacistAllergicUrl = Constants.baseUrl + "/pharm/allergies";
    public static pharmacistCheckMedicineQuantityUrl = Constants.baseUrl + "/pharm/medicine/isAvailable";
    public static pharmacistCompatibleUrl = Constants.baseUrl + "/pharm/medicine/compatible";
    public static pharmacistReservationValidUrl = Constants.baseUrl + "/pharm/reservationValid";
    public static pharmacistReservationUrl = Constants.baseUrl + "/pharm/reservation";
    public static pharmacistCheckAppointmentUrl = Constants.baseUrl + "/pharm/appointment";
    public static pharmacistSaveAppointmentUrl = Constants.baseUrl + "/pharm/saveAppointment";
    public static pharmacistSearchUrl = Constants.baseUrl + "/pharm/patients";
    public static pharmacistWeekUrl = Constants.baseUrl + "/pharm/week";
    public static pharmacistMonthUrl = Constants.baseUrl + "/pharm/month";
    public static pharmacistYearUrl = Constants.baseUrl + "/pharm/year";
    public static pharmacistNotPresentUrl = Constants.baseUrl + "/pharm/notPresent";
    
    //patient
    public static patientsProfileUrl = Constants.baseUrl + "/patient/get";
    public static patientEditUrl = Constants.baseUrl + "/patient/edit";
    public static patientPasswordUrl = Constants.baseUrl + "/patient/changePassword";
    public static patientMedicineUrl = Constants.baseUrl + "/patient/medicine";
    public static patientReservationsUrl = Constants.baseUrl + "/reserv/getByPatientId";
    public static patientCancelReservationUrl = Constants.baseUrl + "/reserv/cancel";
    public static patientPharmaciesByMedicineUrl = Constants.baseUrl + "/pharmacy/getByMedicine";
    public static patientMakeReservationUrl = Constants.baseUrl + "/reserv/make";

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
    public static updateOrderUrl = Constants.baseUrl + "/order/update";
    public static deleteOrderUrl = Constants.baseUrl + "/order/delete/";
    public static dealsPromotionsCreateUrl = Constants.baseUrl + "/pharmacy/send-deals-promotions";
    public static getAllOfferedMedicinesForPharmacyAdminUrl = Constants.baseUrl + "/medicine/offered-by-pharmacy";
    public static getAllNotOfferedMedicinesForPharmacyAdminUrl = Constants.baseUrl + "/medicine/not-offered-by-pharmacy";
    public static deleteMedicineUrl = Constants.baseUrl + "/pharmacy/delete-medicine/";
    public static addMedicinesToPharmacyUrl = Constants.baseUrl + "/pharmacy/add-medicines";
    public static searchMedicinesInPharmacyUrl = Constants.baseUrl + "/medicine/search";
    public static getPriceListUrl = Constants.baseUrl + "/pharmacy/current-price-list";
    public static editPriceListUrl = Constants.baseUrl + "/pharmacy/new-price-list";
    public static getLeaveRequest = Constants.baseUrl + "/leave";
    public static acceptLeaveRequest = Constants.baseUrl + "/leave/accept/";
    public static declineLeaveRequest = Constants.baseUrl + "/leave/decline/";
    public static createExamination = Constants.baseUrl + "/derm/new-predefined";
    public static getNotificationsUrl = Constants.baseUrl + "/pharmacy-admin/notifications";
    public static pharmAppCountByMonthUrl = Constants.baseUrl + "/pharmacy/pharm-app-month";
    public static pharmAppCountByQuarterUrl = Constants.baseUrl + "/pharmacy/pharm-app-quarter";
    public static pharmAppCountByYearUrl = Constants.baseUrl + "/pharmacy/pharm-app-year";
    public static dermAppCountByMonthUrl = Constants.baseUrl + "/pharmacy/derm-app-month";
    public static dermAppCountByQuarterUrl = Constants.baseUrl + "/pharmacy/derm-app-quarter";
    public static dermAppCountByYearUrl = Constants.baseUrl + "/pharmacy/derm-app-year";
    public static appCountByMonthUrl = Constants.baseUrl + "/pharmacy/app-month";
    public static appCountByQuarterUrl = Constants.baseUrl + "/pharmacy/app-quarter";
    public static appCountByYearUrl = Constants.baseUrl + "/pharmacy/app-year";
    public static medConsumptionByMonthUrl = Constants.baseUrl + "/pharmacy/med-consumption-month";
    public static medConsumptionByQuarterUrl = Constants.baseUrl + "/pharmacy/med-consumption-quarter";
    public static medConsumptionByYearUrl = Constants.baseUrl + "/pharmacy/med-consumption-year";
    public static incomePharmAppUrl = Constants.baseUrl + "/pharmacy/income-pharm-app";
    public static incomeDermAppUrl = Constants.baseUrl + "/pharmacy/income-derm-app";
    public static incomeMedConsumptionUrl = Constants.baseUrl + "/pharmacy/income-med-cons";
}
