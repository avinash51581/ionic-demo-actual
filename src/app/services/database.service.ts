import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUserMaster } from '../utilityInterfaces/IUserMaster';
import { IMasterTranche } from '../utilityInterfaces/IMasterTranche';
import { IMasterState } from '../utilityInterfaces/IMasterState';
import { IMasterSubSector } from '../utilityInterfaces/IMasterSubSector';
import { IMasterPurpose } from '../utilityInterfaces/IMasterPurpose';
import { IMasterStateImplementingDepartment } from '../utilityInterfaces/IMasterStateImplementingDepartment';
import { IMasterActivity } from '../utilityInterfaces/IMasterActivity';
import { IMasterProject } from '../utilityInterfaces/IMasterProject';
import { DownloadProjectResponseModule } from '../models/DownloadProjects/downloadProjectResponseModule';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  userDetails = new BehaviorSubject([]);
  trancheMasterDetails = new BehaviorSubject([]);
  masterStateDetails= new BehaviorSubject([]);
  masterImplementingDepartmentDetails=new BehaviorSubject([]);
  masterSubSectorDetails=new BehaviorSubject([]);
  masterPurposeDetails=new BehaviorSubject([]);
  masterActivityDetails=new BehaviorSubject([]);
  masterProjectDetails=new BehaviorSubject([]);

  


//this.database.executeSql('CREATE TABLE IF NOT EXISTS MASTER_STATE (STATE_ID INTEGER PRIMARY KEY NOT NULL,STATE_CODE TEXT NOT NULL,STATE_NAME TEXT DEFAULT NULL)', [])
masterState1=[1,'00','PAN INDIA'];
masterState2=[2,'01','ASSAM'];
masterState3=[3,'02','MEGHALAYA'];
masterState4=[4,'03','MIZORAM'];
masterState5=[5,'06','BIHAR' ];
masterState6=[6,'07','JHARKHAND'];
masterState7=[7,'09','ARUNACHAL PRADESH'];
masterState8=[8,'10','WEST BENGAL'];
masterState9=[9,'14','NAGALAND'];
masterState10=[10,'15','MANIPUR' ];
masterState11=[11,'16','ODISHA'];
masterState12=[12,'17','SIKKIM'];
masterState13=[13,'18','TRIPURA'];
masterState14=[14,'19','ANDAMAN & NICOBAR' ];
masterState15=[15,'20','UTTAR PRADESH'];
masterState16=[16,'21','UTTARAKHAND'];
masterState17=[17,'29','DELHI'];
masterState18=[18,'30','PUNJAB'];
masterState19=[19,'34','HARYANA'];
masterState20=[20,'39','CHANDIGARH'];
masterState21=[21,'44','JAMMU KASHMIR'];
masterState22=[22,'46','HIMACHAL PRADESH'];
masterState23=[23,'50','RAJASTHAN'];
masterState24=[24,'54','GUJARAT'];
masterState25=[25,'60','MAHARASHTRA'];
masterState26=[26,'67','DAMAN DIU'];
masterState27=[27,'68','GOA'];
masterState28=[28,'69','DADRA&NAGAR HAVELI'];
masterState29=[29,'70','MADHYA PRADESH'];
masterState30=[30,'71','CHHATTISGARH'];
masterState31=[31,'80','ANDHRA PRADESH'];
masterState32=[32,'81','TELANGANA'];
masterState33=[33,'84','KARNATAKA'];
masterState34=[34,'89','LAKSHADWEEP' ];
masterState35=[35,'90','TAMIL NADU'];
masterState36=[36,'96','KERALA'];
masterState37=[37,'99','PUDUCHERRY'];
masterState38=[38,'BB','BIRD - BOLPUR'];
masterState39=[39,'BL','BIRD - LUCKNOW'];
masterState40=[40,'BM','BIRD - MANGALORE'];


//this.database.executeSql('CREATE TABLE IF NOT EXISTS MASTER_STATE_DEPERTMENT (SD_STATE_ID INTEGER PRIMARY KEY NOT NULL,STATE_ID INTEGER NOT NULL,SD_STATE_CODE TEXT NOT NULL,SD_DEPT_CODE TEXT NOT NULL,SD_DEPT_NAME DEFAULT NULL,FOREIGN KEY (STATE_ID) REFERENCES MASTER_STATE(STATE_ID))', [])
masterImplementingDept1=[1,1,'00 ', 'NA', 'Not Applicable' ];
masterImplementingDept2=[2,2,'01 ', '010001', 'PUBLIC WORKS DEPARTMENT_0001'];
masterImplementingDept3=[3,2,'01 ', '010002', 'AGRICULTURE DEPARTMENT_0002'  ];
masterImplementingDept4=[4,2,'01 ', '010003', 'IRRIGATION DEPARTMENT_0003'  ];
masterImplementingDept5=[5,2,'01 ', '010004', 'ASSAM LIVE STOCK AND  POULTRY CORPORATION_0004'  ];
masterImplementingDept6=[6,2,'01', '010005 ', 'WATER RESOURCE DEPARTMENT_0005' ];
masterImplementingDept7=[7,2,'01', '010006 ', 'ASSAM POWER GENERATION COMPANY LIMITED_0006' ];
masterImplementingDept8=[8,2,'01', '010007 ', 'ASSAM INDUSTRIAL INFRASTRUCTURE DEVELOPMENT CORPORATION_0007' ];
masterImplementingDept9=[9,2,'01', '010008 ', 'ASSAM FISHERIES DEVELOPMENT CORPORATION_0008' ];
masterImplementingDept10=[10,2,'01', '010009 ', 'ASSAM TOURISM DEVELOPMENT CORPORATION_0009' ];
masterImplementingDept11=[11,2,'01', '010010 ', 'ANIMAL HUSBANDRY AND VETERINARY DEPARTMENT_0010' ];
masterImplementingDept12=[12,2,'01', '010011 ', 'SERICULTURE DEPARTMENT_0011' ];
masterImplementingDept13=[13,2,'01', '010012 ', 'Fishery  Department' ];
masterImplementingDept14=[14,2,'01', '010013 ', 'Co-operation Department' ];
masterImplementingDept15=[15,2,'01', '010014 ', 'Soil Coservation Department' ];
masterImplementingDept16=[16,2,'01', '010015 ', 'Secondary Education Department' ];
masterImplementingDept17=[17,2,'01', '010016 ', 'Elementary Education Department' ];
masterImplementingDept18=[18,2,'01', '010017 ', 'Assam State Warehousing Corporation' ];
masterImplementingDept19=[19,2,'01', 'NA ', 'Not Applicable' ];
masterImplementingDept20=[20,3,'02', '020001 ', 'PLANNING DEPT' ];
masterImplementingDept21=[21,3,'02', '020002 ', 'FINANCE DEPT' ];
masterImplementingDept22=[22,3,'02', '020003 ', 'PWD' ];
masterImplementingDept23=[23,3,'02', '020004 ', 'WATER RESOURCES DEPARTMENT' ];
masterImplementingDept24=[24,3,'02', '020005 ', 'SOIL AND WATER CONSERVATION DEPT' ];
masterImplementingDept25=[25,3,'02', '020006 ', 'PUBLIC HEALTH ENGINEERING DEPT' ];
masterImplementingDept26=[26,3,'02', '020007 ', 'ANIMAL HUSBANDRY AND VETERINARY DEPT' ];
masterImplementingDept27=[27,3,'02', '020008 ', 'MEGHALAYA POWER GENERATION CORPORATION LTD' ];
masterImplementingDept28=[28,3,'02', 'NA ', 'Not Applicable' ];
masterImplementingDept29=[29,4,'03', '030001 ', 'PUBLIC WORKS DEPTT.' ];
masterImplementingDept30=[30,4,'03', '030002 ', 'PUBLIC HEALTH ENGG.' ];
masterImplementingDept31=[31,4,'03', '030003 ', 'POWER AND ELECTRICITY DEPTT.' ];
masterImplementingDept32=[32,4,'03', '030004 ', 'MINOR IRRI DEPTT.' ];
masterImplementingDept33=[33,4,'03', '030005 ', 'ANIMAL HUSB. AND VETY DEPTT.' ];
masterImplementingDept34=[34,4,'03', '030006 ', 'SOIL CONSERVATION DEPTT.' ];
masterImplementingDept35=[35,4,'03', '030007 ', 'AGRICULTURE DEPTT.' ];
masterImplementingDept36=[36,4,'03', '030008 ', 'HEALTH AND FAMILY WELFARE DEPARTMENT' ];
masterImplementingDept37=[37,4,'03', '030009 ', 'COMMERCE AND INDUSTRIES DEPTT.' ];
masterImplementingDept38=[38,4,'03', '030010 ', 'HORTICULTURE DEPTT.' ];
masterImplementingDept39=[39,4,'03', '030011 ', '"Health and Family Welfare Department, Govt of Mizoram"' ];
masterImplementingDept40=[40,4,'03', '030012 ', 'Department of School Education' ];
masterImplementingDept41=[41,4,'03', '13 ', 'RURAL DEVELOPMENT DEPARTMENT (RDD) GOVT OF MIZORAM' ];
masterImplementingDept42=[42,4,'03', 'NA ', 'Not Applicable' ];
masterImplementingDept43=[43,5,'06', '060001 ', 'FINANCE DEPARTMENT' ];
masterImplementingDept44=[44,5,'06', '060002 ', 'WATER RESOURCES DEPARTMENT' ];
masterImplementingDept45=[45,5,'06', '060003 ', 'MINOR WATER RESOURCES DEPARTMENT' ];
masterImplementingDept46=[46,5,'06', '060004 ', 'RURAL WORKS DEPARTMENT' ];
masterImplementingDept47=[47,5,'06', '060005 ', 'ROAD CONSTRUCTION DEPARTMENT' ];
masterImplementingDept48=[48,5,'06', '060006 ', 'ENERGY DEPARTMENT' ];
masterImplementingDept49=[49,5,'06', '060007 ', 'HEALTH DEPARTMENT' ];
masterImplementingDept50=[50,5,'06', '060008 ', 'PUBLIC HEALTH ENGINEERING DEPARTMENT' ];
masterImplementingDept51=[51,5,'06', '060009 ', 'HUMAN RESOURCE DEVELOPMENT DEPARTMENT' ];
masterImplementingDept52=[52,5,'06', '060010 ', 'SOCIAL WELFARE DEPARTMENT' ];
masterImplementingDept53=[53,5,'06', '060011 ', 'FOOD AND CONSUMER PROTECTION DEPARTMENT' ];
masterImplementingDept54=[54,5,'06', '060012 ', 'BUILDING CONSTRUCTION DEPARTMENT' ];
masterImplementingDept55=[55,5,'06', '060013 ', 'AGRICULTURE DEPARTMENT' ];
masterImplementingDept56=[56,5,'06', '060014 ', 'Rural Development Department' ];
masterImplementingDept57=[57,5,'06', 'NA ', 'Not Applicable' ];
masterImplementingDept58=[58,6,'07', '070001 ', 'RURAL DEVELOPMENT DEPARTMENT' ];
masterImplementingDept59=[59,6,'07', '070002 ', 'RURAL WORKS DEPARTMENT' ];
masterImplementingDept60=[60,6,'07', '070003 ', 'ROAD CONSTRUCTION DEPARTMENT' ];
masterImplementingDept61=[61,6,'07', '070004 ', 'DEPARTMENT OF WATER RESOURCES' ];
masterImplementingDept62=[62,6,'07', '070005 ', 'FOREST AND ENVIRONMENT DEPARTMENT' ];
masterImplementingDept63=[63,6,'07', '070006 ', 'DRINKING WATER AND SANITATION DEPARTMENT' ];
masterImplementingDept64=[64,6,'07', '070007 ', 'HUMAN RESOURCE DEVELOPMENT DEPARTMENT' ];
masterImplementingDept65=[65,6,'07', '070008 ', 'ANIMAL HUSBANDRY AND FISHERIES DEPARTMENT' ];
masterImplementingDept66=[66,6,'07', 'NA ', 'Not Applicable' ];
masterImplementingDept67=[67,7,'09', '090001 ', 'PWD(WZ)' ];
masterImplementingDept68=[68,7,'09', '090002 ', 'PWD(EZ)' ];
masterImplementingDept69=[69,7,'09', '090003 ', 'PWD(CZ)' ];
masterImplementingDept70=[70,7,'09', '090004 ', 'PHED' ];
masterImplementingDept71=[71,7,'09', '090005 ', 'PHED(EZ)' ];
masterImplementingDept72=[72,7,'09', '090006 ', 'PHEANDWS' ];
masterImplementingDept73=[73,7,'09', '090007 ', 'DHPD' ];
masterImplementingDept74=[74,7,'09', '090008 ', 'POWER' ];
masterImplementingDept75=[75,7,'09', '090009 ', 'WRD' ];
masterImplementingDept76=[76,7,'09', '090010 ', 'RWD' ];
masterImplementingDept77=[77,7,'09', 'DAHVDD ', '"Department of Animal Husbandary, Veterinary and Dairy Development, GoAP"' ];
masterImplementingDept78=[78,7,'09', 'NA ', 'Not Applicable' ];
masterImplementingDept79=[79,7,'09', 'PHEDWZ ', 'PHED (WZ)' ];
masterImplementingDept80=[80,7,'09', 'PWDCZA ', 'Public Works Department (PWD) - Central Zone A (CZ-A)' ];
masterImplementingDept81=[81,7,'09', 'PWDCZB ', 'Public Works Department - Central Zone B (PWD CZ-B)' ];
masterImplementingDept82=[82,7,'09', 'PWDWZ ', 'Public Works Department - Western Zone (PWD-WZ)' ];
masterImplementingDept83=[83,7,'09', 'WRDEZ ', 'Water Resources Department - Eastern Zone (WRD-EZ)' ];
masterImplementingDept84=[84,7,'09', 'WRDWZ ', 'Water Resources Department - Western Zone (WRD-WZ)' ];
masterImplementingDept85=[85,8,'10', '100001 ', 'ANIMAL RESOURCES DEVELOPMENT DEPARTMENT' ];
masterImplementingDept86=[86,8,'10', '100002 ', 'BACKWARD CLASSES WELFARE DEPARTMENT' ];
masterImplementingDept87=[87,8,'10', '100003 ', 'COOPERATION DEPARTMENT' ];
masterImplementingDept88=[88,8,'10', '100004 ', 'HILL AFFAIRS DEPARTMENT' ];
masterImplementingDept89=[89,8,'10', '100005 ', 'MASS EDUCATION EXTENSION AND LIBRARY SERVICES DEPARTMENT' ];
masterImplementingDept90=[90,8,'10', '100006 ', 'AGRICULTURE DEPARTMENT' ];
masterImplementingDept91=[91,8,'10', '100007 ', 'FOOD PROCESSING INDUSTRIES AND HORTICULTURE DEPARTMENT' ];
masterImplementingDept92=[92,8,'10', '100008 ', 'FISHERIES DEPARTMENT' ];
masterImplementingDept93=[93,8,'10', '100009 ', 'FOOD AND SUPPLIES DEPARTMENT' ];
masterImplementingDept94=[94,8,'10', '100010 ', 'FOREST DEPARTMENT' ];
masterImplementingDept95=[95,8,'10', '100011 ', 'HEALTH AND FAMILY WELFARE DEPARTMENT' ];
masterImplementingDept96=[96,8,'10', '100012 ', 'IRRIGATION AND WATERWAYS DEPARTMENT' ];
masterImplementingDept97=[97,8,'10', '100013 ', 'MINORITY AFFAIRS AND MADRASA EDUCATION DEPARTMENT' ];
masterImplementingDept98=[98,8,'10', '100014 ', 'MICRO AND SMALL SCALE ENTERPRISES AND TEXTILES DEPARTMENT' ];
masterImplementingDept99=[99,8,'10', '100015 ', 'NORTH BENGAL DEVELOPMENT DEPARTMENT' ];
masterImplementingDept100=[100,8,'10', '100016 ', 'PANCHAYAT AND RURAL DEVELOPMENT DEPARTMENT' ];
masterImplementingDept101=[101,8,'10', '100017 ', 'PASCHIMANCHAL UNNAYAN AFFAIRS DEPARTMENT' ];
masterImplementingDept102=[102,8,'10', '100018 ', 'PUBLIC HEALTH ENGINEERING DEPARTMENT' ];
masterImplementingDept103=[103,8,'10', '100019 ', 'POWER AND NON CONVENTIONAL ENERGY SOURCES DEPARTMENT' ];
masterImplementingDept104=[104,8,'10', '100020 ', 'PUBLIC WORKS (ROADS) DEPARTMENT' ];
masterImplementingDept105=[105,8,'10', '100021 ', 'PUBLIC WORKS DEPARTMENT' ];
masterImplementingDept106=[106,8,'10', '100022 ', 'SCHOOL EDUCATION DEPARTMENT' ];
masterImplementingDept107=[107,8,'10', '100023 ', 'SELF HELP GROUP AND SELF EMPLOYMENT DEPARTMENT' ];
masterImplementingDept108=[108,8,'10', '100024 ', 'SUNDERBAN AFFAIRS DEPARTMENT' ];
masterImplementingDept109=[109,8,'10', '100025 ', 'TECHNICAL EDUCATION AND TRAINING DEPARTMENT' ];
masterImplementingDept110=[1010,8,'10', '100026 ', 'TOURISM DEPARTMENT' ];
masterImplementingDept111=[111,8,'10', '100027 ', 'AGRICULTURE MARKETING DEPARTMENT' ];
masterImplementingDept112=[112,8,'10', '100028 ', 'WATER INVESTIGATION AND DEVELOPMENT DEPARTMENT' ];
masterImplementingDept113=[113,8,'10 ', '100029 ', 'WOMEN AND SOCIAL WELFARE DEPARTMENT' ];
masterImplementingDept114=[114,8,'10 ', '100030 ', 'BIO TECHNOLOGY DEPARTMENT' ];
masterImplementingDept115=[115,8,'10 ', '100031 ', 'CHILD DEVELOPMENT DEPARTMENT' ];
masterImplementingDept116=[116,8,'10 ', '100032 ', 'CIVIL DEFENCE DEPARTMENT' ];
masterImplementingDept117=[117,8,'10 ', '100033 ', 'COMMERCE AND INDUSTRIES DEPARTMENT' ];
masterImplementingDept118=[118,8,'10 ', '100034 ', 'CONSUMER AFFAIRS DEPARTMENT' ];
masterImplementingDept119=[119,8,'10 ', '100035 ', 'CORRECTIONAL ADMINISTRATION DEPARTMENT' ];
masterImplementingDept120=[120,8,'10 ', '100036 ', 'DEVELOPMENT AND PLANNING DEPARTMENT' ];
masterImplementingDept121=[121,8,'10 ', '100037 ', 'DISASTER MANAGEMENT DEPARTMENT' ];
masterImplementingDept122=[122,8,'10 ', '100038 ', 'ENVIRONMENT DEPARTMENT' ];
masterImplementingDept123=[123,8,'10 ', '100039 ', 'EXCISE DEPARTMENT' ];
masterImplementingDept124=[124,8,'10 ', '100040 ', 'FINANCE DEPARTMENT' ];
masterImplementingDept125=[125,8,'10 ', '100041 ', 'FIRE AND EMERGENCY SERVICES DEPARTMENT' ];
masterImplementingDept126=[126,8,'10 ', '100042 ', 'HIGHER EDUCATION DEPARTMENT' ];
masterImplementingDept127=[127,8,'10 ', '100043 ', 'SCIENCE AND TECHNOLOGY DEPARTMENT' ];
masterImplementingDept128=[128,8,'10 ', '100044 ', 'MUNICIPAL AFFAIRS DEPARTMENT' ];
masterImplementingDept129=[129,8,'10 ', '100045 ', 'PARLIAMENTARY AFFAIRS DEPARTMENT' ];
masterImplementingDept130=[130,8,'10 ', '100046 ', 'PERSONNEL AND ADMINISTRATIVE REFORMS DEPARTMENT' ];
masterImplementingDept131=[131,8,'10 ', '100047 ', 'PUBLIC ENTERPRISES DEPARTMENT' ];
masterImplementingDept132=[132,8,'10 ', '100048 ', 'REFUGEE RELIEF AND REHABILITATION DEPARTMENT' ];
masterImplementingDept133=[133,8,'10 ', '100049 ', 'SPORTS DEPARTMENT' ];
masterImplementingDept134=[134,8,'10 ', '100050 ', 'STATISTIC AND PROGRAMME IMPLEMENTATION DEPARTMENT' ];
masterImplementingDept135=[135,8,'10 ', '100051 ', 'TRANSPORT DEPARTMENT' ];
masterImplementingDept136=[136,8,'10 ', '100052 ', 'URBAN DEVELOPMENT AND TOWN AND COUNTRY PLANNING DEPARTMENT' ];
masterImplementingDept137=[137,8,'10 ', '100053 ', 'YOUTH SERVICES DEPARTMENT' ];
masterImplementingDept138=[138,8,'10 ', '100054 ', 'HOME DEPARTMENT' ];
masterImplementingDept139=[139,8,'10 ', '100055 ', 'HOUSING DEPARTMENT' ];
masterImplementingDept140=[140,8,'10 ', '100056 ', 'INDUSTRIAL RECONSTRUCTION DEPARTMENT' ];
masterImplementingDept141=[141,8,'10 ', '100057 ', 'INFORMATION AND CULTURAL AFFAIRS DEPARTMENT' ];
masterImplementingDept142=[142,8,'10 ', '100058 ', 'INFORMATION TECHNOLOGY DEPARTMENT' ];
masterImplementingDept143=[143,8,'10 ', '100059 ', 'JUDICIAL DEPARTMENT' ];
masterImplementingDept144=[144,8,'10 ', '100060 ', 'LABOUR DEPARTMENT' ];
masterImplementingDept145=[145,8,'10 ', '100061 ', 'LAND AND LAND REFORMS DEPARTMENT' ];
masterImplementingDept146=[146,8,'10 ', '100062 ', 'LAW DEPARTMENT' ];
masterImplementingDept147=[147,8,'10 ', 'NA ', 'Not Applicable' ];
masterImplementingDept148=[148,9,'14 ', '140001 ', 'AGRICULTURE DEPARTMENT' ];
masterImplementingDept149=[149,9,'14 ', '140002 ', 'PUBLIC WORKS DEPARTMENT' ];
masterImplementingDept150=[150,9,'14 ', '140003 ', 'ANIMAL HUSBANDRY AND VETERINARY DEPARTMENT' ];
masterImplementingDept151=[151,9,'14 ', '140004 ', 'LAND RESOURCES DEPARTMENT' ];
masterImplementingDept152=[152,9,'14 ', '140005 ', 'SOIL AND WATER CONSERVATION DEPARTMENT' ];
masterImplementingDept153=[153,9,'14 ', '140006 ', 'SERICULTURE DEPARTMENT' ];
masterImplementingDept154=[154,9,'14 ', '140007 ', 'FISHERIES DEPARTMENT' ];
masterImplementingDept155=[155,9,'14 ', '140008 ', 'POWER DEPARTMENT' ];
masterImplementingDept156=[156,9,'14 ', '140009 ', 'HORTICULTURE DEPARTMENT' ];
masterImplementingDept157=[157,9,'14 ', 'NA ', 'Not Applicable' ];
masterImplementingDept158=[158,10,'15 ', '150001 ', 'FISHERIES DEPARTMENT' ];
masterImplementingDept159=[159,10,'15 ', '150002 ', 'IRRIGATION AND FLOOD DEPARTMENT' ];
masterImplementingDept160=[160,10,'15 ', '150003 ', 'HEALTH SERVICES DEPARTMENT' ];
masterImplementingDept161=[161,10,'15 ', '150004 ', 'EDUCATION DEPARTMENT' ];
masterImplementingDept162=[162,10,'15 ', '150005 ', 'COMMERCEANDINDUSTRIES DEPARTMENT' ];
masterImplementingDept163=[163,10,'15 ', '150006 ', 'Public Works Department' ];
masterImplementingDept164=[164,10,'15 ', '150007 ', 'Department of Minor Irrigation' ];
masterImplementingDept165=[165,10,'15 ', '150008 ', 'Public Health Engineering Department' ];
masterImplementingDept166=[166,10,'15 ', 'NA ', 'Not Applicable' ];
masterImplementingDept167=[167,11,'16 ', '160001 ', 'DEPARTMENT OF WATER RESOURCES(DOWR)' ];
masterImplementingDept168=[168,11,'16 ', '160002 ', 'DEPARTMENT OF WATER RESOURCES-MINOR IRRIGATION(DOWR-MI)' ];
masterImplementingDept169=[169,11,'16 ', '160003 ', 'ORISSA LIFT IRRIGATION CORPORATION(OLIC)' ];
masterImplementingDept170=[170,11,'16 ', '160004 ', 'WORKS DEPARTMENT(WD)' ];
masterImplementingDept171=[171,11,'16 ', '160005 ', 'RURAL DEVELOPMENT DEPARTMENT(RDD)' ];
masterImplementingDept172=[172,11,'16 ', '160006 ', 'AGRICULTURE DEPARTMENT' ];
masterImplementingDept173=[173,11,'16 ', '160007 ', 'ORISSA AGRO INDUSTRIES CORPORATION(OAIC) ' ];
masterImplementingDept174=[174,11,'16 ', '160008 ', 'ANIMAL HUSBANDRY DEPARTMENT(AH)' ];
masterImplementingDept175=[175,11,'16 ', '160009 ', 'FISHERIES' ];
masterImplementingDept176=[176,11,'16 ', '160010 ', 'COMMERCE AND TRANSPORT DEPARTMENT(CTD)' ];
masterImplementingDept177=[177,11,'16 ', '160011 ', 'RURAL WATER SUPPLY AND SANITATION(RWSS)' ];
masterImplementingDept178=[178,11,'16 ', '160012 ', 'Co-operation Department' ];
masterImplementingDept179=[179,11,'16 ', 'NA ', 'Not Applicable' ];
masterImplementingDept180=[180,12,'17 ', '170001 ', 'PUBLIC WORKS DEPARTMENT' ];
masterImplementingDept181=[181,12,'17 ', '170002 ', 'PUBLIC HEALTH ENGINEERING DEPARTMENT' ];
masterImplementingDept182=[182,12,'17 ', '170003 ', 'RURAL MANAGEMENT DEVELOPMENT DEPARTMENT' ];
masterImplementingDept183=[183,12,'17 ', '170004 ', 'HUMAN RESOURCES DEVELOPMENT DEPARTMENT' ];
masterImplementingDept184=[184,12,'17 ', '170005 ', 'URBAN DEVELOPMENT HOUSING DEPARTMENT' ];
masterImplementingDept185=[185,12,'17 ', '170006 ', 'IRRIGATION AND FLOOD CONTROL' ];
masterImplementingDept186=[186,12,'17 ', 'NA ', 'Not Applicable' ];
masterImplementingDept187=[187,13,'18 ', '180001 ', 'PWD (Road &Bridges)' ];
masterImplementingDept188=[188,13,'18 ', '180002 ', 'PWD (Water Resources)' ];
masterImplementingDept189=[186,13,'18 ', '180003 ', 'Agriculture Department' ];
masterImplementingDept190=[190,13,'18 ', '180004 ', 'Health & Family Welfare Department' ];
masterImplementingDept191=[191,13,'18 ', '180005 ', 'Family Welfare & Preventive Medicine' ];
masterImplementingDept192=[192,13,'18 ', '180006 ', 'Fisheries Department' ];
masterImplementingDept193=[193,13,'18 ', '180007 ', 'PWD (Drinking Water & Sanitation)' ];
masterImplementingDept194=[194,13,'18 ', '18008 ', 'ARDD' ];
masterImplementingDept195=[195,13,'18 ', '18009 ', 'OBC Welfare Department' ];
masterImplementingDept196=[196,13,'18 ', '18010 ', 'PWD NH' ];
masterImplementingDept197=[197,13,'18 ', '18011 ', 'PWD PMGSY' ];
masterImplementingDept198=[198,13,'18 ', '18012 ', 'TRPCL' ];
masterImplementingDept199=[199,13,'18 ', '18013 ', 'PWD(BUILDING)' ];
masterImplementingDept200=[200,13,'18 ', '18014 ', 'Tripura Housing and Construction Board' ];
masterImplementingDept201=[201,13,'18 ', 'NA ', 'ARDD' ];
masterImplementingDept202=[202,14,'19 ', 'NA ', 'Not Applicable' ];
masterImplementingDept203=[203,15,'20 ', '200001 ', 'FINANCE DEPARTMENT' ];
masterImplementingDept204=[204,15,'20 ', '200002 ', 'IRRIGATION DEPARTMENT (CIVIL)' ];
masterImplementingDept205=[205,15,'20 ', '200003 ', 'IRRIGATION DEPARTMENT (MECHANICAL)' ];
masterImplementingDept206=[206,15,'20 ', '200004 ', 'PUBLIC WORKS DEPARTMENT (ROADS)' ];
masterImplementingDept207=[207,15,'20 ', '200005 ', 'PUBLIC WORKS DEPARTMENT (BRIDGES)' ];
masterImplementingDept208=[208,15,'20 ', '200006 ', 'AGRICULTURE DEPARTMENT' ];
masterImplementingDept209=[209,15,'20 ', '200007 ', 'MINOR IRRIGATION DEPARTMENT' ];
masterImplementingDept210=[210,15,'20 ', '200008 ', 'FORESTRY DEPARTMENT' ];
masterImplementingDept211=[211,15,'20 ', '200009 ', 'ANIMAL HUSBANDRY DEPARTMENT' ];
masterImplementingDept212=[212,15,'20 ', '200010 ', 'EDUCATION DEPARTMENT' ];
masterImplementingDept213=[213,15,'20 ', '200011 ', 'Dairy Development Dept.' ];
masterImplementingDept214=[214,15,'20 ', 'NA ', 'Not Applicable' ];
masterImplementingDept215=[215,16,'21 ', '200001 ', 'FINANCE DEPARTMENT' ];
masterImplementingDept216=[216,16,'21 ', '200002 ', 'IRRIGATION DEPARTMENT (CIVIL)' ];
masterImplementingDept217=[217,16,'21 ', '200003 ', 'IRRIGATION DEPARTMENT (MECHANICAL)' ];
masterImplementingDept218=[218,16,'21 ', '200004 ', 'PUBLIC WORKS DEPARTMENT (ROADS)' ];
masterImplementingDept219=[219,16,'21 ', '200005 ', 'PUBLIC WORKS DEPARTMENT (BRIDGES)' ];
masterImplementingDept220=[220,16,'21 ', '200006 ', 'AGRICULTURE DEPARTMENT' ];
masterImplementingDept221=[221,16,'21 ', '200007 ', 'MINOR IRRIGATION DEPARTMENT' ];
masterImplementingDept222=[222,16,'21 ', '200008 ', 'FORESTRY DEPARTMENT' ];
masterImplementingDept223=[223,16,'21 ', '200009 ', 'ANIMAL HUSBANDRY DEPARTMENT' ];
masterImplementingDept224=[224,16,'21 ', '200010 ', 'EDUCATION DEPARTMENT' ];
masterImplementingDept225=[225,16,'21 ', '200011 ', 'Rural Development' ];
masterImplementingDept226=[226,16,'21 ', '200012 ', 'Rural Roads & Drainage Department' ];
masterImplementingDept227=[227,16,'21 ', '200013 ', 'INDUSTRY DEPARTMENT' ];
masterImplementingDept228=[228,16,'21 ', '200014 ', 'PEYJAL DEPT.' ];
masterImplementingDept229=[229,16,'21 ', '200015 ', 'Horticulture Department' ];
masterImplementingDept230=[230,16,'21 ', '200016 ', 'UTTRAKHAND JAL SANSTHAN' ];
masterImplementingDept231=[231,16,'21 ', 'NA ', 'Fisheries Department' ];
masterImplementingDept232=[232,17,'29 ', 'NA ', 'Not Applicable' ];
masterImplementingDept233=[233,18,'30 ', '300001 ', 'PUBLIC WORKS DEPARTMENT' ];
masterImplementingDept234=[234,18,'30 ', '300002 ', 'WATER SUPPLY AND SANITATION' ];
masterImplementingDept235=[235,18,'30 ', '300003 ', 'RURAL DEVELOPMENT AND PANCHAYAT DEPARTMENT' ];
masterImplementingDept236=[236,18,'30 ', '300004 ', 'EDUCATION DEPARTMENT ' ];
masterImplementingDept237=[237,18,'30 ', '300005 ', 'TECHNICAL EDUCATION DEPARTMENT' ];
masterImplementingDept238=[238,18,'30 ', '300006 ', 'PUNJAB EDUSAT SOCIETY' ];
masterImplementingDept239=[239,18,'30 ', '300007 ', 'ANIMAL HUSBANDRY' ];
masterImplementingDept240=[240,18,'30 ', '300008 ', 'GURU ANGAD DEV VETERINARY AND AGRICULTURAL SCIENCES UNIVERSITY(GADVASU)' ];
masterImplementingDept241=[241,18,'30 ', '300009 ', 'SOIL AND WATER CONSERVATION' ];
masterImplementingDept242=[242,18,'30 ', '300010 ', 'IRRIGATION DEPARTMENT - LINING ' ];
masterImplementingDept243=[243,18,'30 ', '300011 ', 'IRRIGATION DEPARTMENT - CANAL' ];
masterImplementingDept244=[244,18,'30 ', '300012 ', 'IRRIGATION DEPARTMENT - DRAINAGE' ];
masterImplementingDept245=[245,18,'30 ', '300013 ', 'IRRIGATION DEPARTMENT - KANDI AREA DEVELOPMENT' ];
masterImplementingDept246=[246,18,'30 ', '300014 ', 'PUNJAB WATER RESOURCES MANAGEMENT AND DEVELOPMENT CORPORATION (PWRMDC)' ];
masterImplementingDept247=[247,18,'30 ', '300015 ', 'PUNJAB WATER RESOURCES AND ENVIRONMENT DIRECTORATE (PWRED)' ];
masterImplementingDept248=[248,18,'30 ', '300016 ', 'PUNJAB AGRO EXPORT CORPORATION' ];
masterImplementingDept249=[249,18,'30 ', '300017 ', 'Department of Cooperation' ];
masterImplementingDept250=[250,18,'30 ', '300018 ', 'Punjab Health Systems Corporation' ];
masterImplementingDept251=[251,18,'30 ', 'NA ', 'Not Applicable' ];
masterImplementingDept252=[252,19,'34 ', '340001 ', 'HARYANA IRRIGATION DEPARTMENT' ];
masterImplementingDept253=[253,19,'34 ', '340002 ', 'PWD(BANDR)' ];
masterImplementingDept254=[254,19,'34 ', '340003 ', 'PUBLIC HEALTH ENGINEERING DEPARTMENT' ];
masterImplementingDept255=[255,19,'34 ', '340004 ', 'DEPARTMENT OF ANIMAL HUSBANDRY AND DAIRYING' ];
masterImplementingDept256=[256,19,'34 ', '340005 ', 'DEPARTMENT OF WOMEN AND CHILD DEVELOPMENT' ];
masterImplementingDept257=[257,19,'34 ', '340006 ', 'SCHOOL EDUCATION DEPARTMENT' ];
masterImplementingDept258=[258,19,'34 ', '340007 ', 'FOOD AND SUPPLIES DEPARTMENT' ];
masterImplementingDept259=[259,19,'34 ', '340008 ', 'HARYANA AGRO INDUSTRIES CORPORATION LTD.' ];
masterImplementingDept260=[260,19,'34 ', '340009 ', 'HARYANA VIDYUT PRASARAN NIGAM LTD.' ];
masterImplementingDept261=[261,19,'34 ', '340010 ', 'UTTAR HARYANA BIJLEE VITRAN NIGAM LTD.' ];
masterImplementingDept262=[262,19,'34 ', '340011 ', 'DAKSHIN HARYANA BIJLEE VITRAN NIGAM LTD.' ];
masterImplementingDept263=[263,19,'34 ', '340012 ', 'Haryana Power Generation Corporation Ltd' ];
masterImplementingDept264=[264,19,'34 ', '340013 ', 'Haryana State Warehousing Corporation' ];
masterImplementingDept265=[265,19,'34 ', '340014 ', 'Haryana Renewable Energy Development Agency (HAREDA)' ];
masterImplementingDept266=[266,19,'34 ', '340015 ', 'Development and Panchayats' ];
masterImplementingDept267=[267,19,'34 ', 'NA ', 'Not Applicable' ];
masterImplementingDept268=[268,20,'39 ', 'NA ', 'Not Applicable' ];
masterImplementingDept269=[269,21,'44 ', '440001 ', 'IRRIGATION AND FLOOD CONTROL(IANDFC)' ];
masterImplementingDept270=[270,21,'44 ', '440002 ', 'PWD(RANDB)' ];
masterImplementingDept271=[271,21,'44 ', '440003 ', 'PUBLIC HEALTH ENGINEERING(PHE)' ];
masterImplementingDept272=[272,21,'44 ', '440004 ', 'PUBLIC HEALTH CENTER(PHC)' ];
masterImplementingDept273=[273,21,'44 ', '440005 ', 'PRIMARY EDUCATION(PE)' ];
masterImplementingDept274=[274,21,'44 ', '440006 ', 'ANIMAL HUSBANDRY(AH)' ];
masterImplementingDept275=[275,21,'44 ', '440007 ', 'SHEEP HUSBANDRY(SH)' ];
masterImplementingDept276=[276,21,'44 ', '440008 ', 'AGRICULTURE(AGRI)' ];
masterImplementingDept277=[277,21,'44 ', '440009 ', 'FORESTRY' ];
masterImplementingDept278=[278,21,'44 ', 'NA ', 'Not Applicable' ];
masterImplementingDept279=[279,22,'46 ', '460001 ', 'ANIMAL HUSBANDARY DEPARTMENT' ];
masterImplementingDept280=[280,22,'46 ', '460002 ', 'AGRICULTURE DEPARTMENT' ];
masterImplementingDept281=[281,22,'46 ', '460003 ', 'IRRIGATION AND PUBLIC HEALTH DEPARTMENT' ];
masterImplementingDept282=[282,22,'46 ', '460004 ', 'PUBLIC WORK DEPARTMENT' ];
masterImplementingDept283=[283,22,'46 ', '460005 ', 'HIMACHAL PRADESH HORTICULTURE PRODUCE MARKETING AND PROCESSING CORPORATION' ];
masterImplementingDept284=[284,22,'46 ', 'NA ', 'Not Applicable' ];
masterImplementingDept285=[285,23,'50 ', '500001 ', 'WATER RESOURCES DEPARTMENT' ];
masterImplementingDept286=[286,23,'50 ', '500002 ', 'PUBLIC WORKS DEPARTMENT' ];
masterImplementingDept287=[287,23,'50 ', '500003 ', 'PUBLIC HEALTH ENGINEERING DEPARTMENT' ];
masterImplementingDept288=[288,23,'50 ', '500004 ', 'AGRICULTURE DEPARTMENT' ];
masterImplementingDept289=[289,23,'50 ', '500005 ', 'DEPARTMENT OF FORESTS ' ];
masterImplementingDept290=[290,23,'50 ', '500006 ', 'COMMAND AREA DEVELOPMENTAND WATER UTILISATION  DEPARTMENT' ];
masterImplementingDept291=[291,23,'50 ', '500007 ', 'RAJASTHAN STATE WAREHOUSING CORPORATION' ];
masterImplementingDept292=[292,23,'50 ', '500008 ', 'DEPARTMENT OF WOMEN AND CHILD DEVELOPMENT/ICDS' ];
masterImplementingDept293=[293,23,'50 ', '500009 ', 'DEPARTMENT OF EDUCATION' ];
masterImplementingDept294=[294,23,'50 ', '500010 ', 'SOCIAL JUSTICE AND EMPOWERMENT DEPARTMENT' ];
masterImplementingDept295=[295,23,'50 ', '500011 ', 'DEPARTMENT OF INFORMATION TECHNOLOGY AND COMMUNICATION' ];
masterImplementingDept296=[296,23,'50 ', '500012 ', 'DEPARTMENT OF ANIMAL HUSBANDRY ' ];
masterImplementingDept297=[297,23,'50 ', '500013 ', 'RAJASTHAN STATE AGRICULTURE MARKETING BOARD ' ];
masterImplementingDept298=[298,23,'50 ', '500014 ', 'PANCHAYATI RAJ DEPARTMENT' ];
masterImplementingDept299=[299,23,'50 ', '500015 ', '"Medical and Health Department, Government of Rajasthan"' ];
masterImplementingDept300=[300,23,'50 ', 'NA ', 'Not Applicable' ];
masterImplementingDept301=[301,24,'54 ', '540001 ', 'AGRICULTURE DEPARTMENT'];
masterImplementingDept302=[302,24,'54 ', '540002 ', 'EDUCATION DEPARTMENT' ];
masterImplementingDept303=[303,24,'54 ', '540003 ', 'ENERGY AND PETROCHEMICALS DEPARTMENT' ];
masterImplementingDept304=[304,24,'54 ', '540004 ', 'FISHEIRES DEPARTMENT' ];
masterImplementingDept305=[305,24,'54 ', '540005 ', '"FOOD, CIVIL SUPPLIES AND CONSUMER AFFAIRS DEPARTMENT"' ];
masterImplementingDept306=[306,24,'54 ', '540006 ', 'FORESTS AND ENVIRONMENT DEPARTMENT' ];
masterImplementingDept307=[307,24,'54 ', '540007 ', 'GUJARAT WATER SUPPLY AND SEWERAGE BOARD' ];
masterImplementingDept308=[308,24,'54 ', '540008 ', 'HEALTH AND FAMILY WELFARE DEPARTMENT' ];
masterImplementingDept309=[309,24,'54 ', '540009 ', 'INDUSTRIES AND MINES DEPARTMENT' ];
masterImplementingDept310=[310,24,'54 ', '540010 ', '"NARMADA WATER RESOURCES, WATER SUPPLY AND KALPSAR DEPARTMENT"' ];
masterImplementingDept311=[311,24,'54 ', '540011 ', '"PANCHAYAT, RURAL HOUSING AND RURAL DEVELOPMENT DEPARTMENT"' ];
masterImplementingDept312=[312,24,'54 ', '540012 ', 'ROADS AND BUILDINGS  (PANCHAYAT)' ];
masterImplementingDept313=[313,24,'54 ', '540013 ', 'ROADS AND BUILDINGS  (STATE)' ];
masterImplementingDept314=[314,24,'54 ', '540014 ', 'SARDAR SAROVAR NARMADA NIGAM LTD.' ];
masterImplementingDept315=[315,24,'54 ', '540015 ', 'SCIENCE AND TECHNOLOGY DEPARTMENT' ];
masterImplementingDept316=[316,24,'54 ', '540016 ', 'TRIBAL DEVELOPMENT DEPARTMENT' ];
masterImplementingDept317=[317,24,'54 ', '540017 ', 'WOMEN AND CHILD DEVELOPMENT DEPARTMENT' ];
masterImplementingDept318=[318,24,'54 ', 'NA ', 'Not Applicable' ];
masterImplementingDept319=[319,25,'60 ', '600001 ', 'FINANCE DEPARTMENT' ];
masterImplementingDept320=[320,25,'60 ', '600002 ', 'JOINT DIRECTOR ACCOUNTS AND TRESURIES' ];
masterImplementingDept321=[321,25,'60 ', '600003 ', 'PUBLIC WORKS DEPARTMENT' ];
masterImplementingDept322=[322,25,'60 ', '600004 ', 'WATER RESOURCES DEPARTMENT' ];
masterImplementingDept323=[323,25,'60 ', '600005 ', 'RURAL WATER SUPPLY AND SANITATION DEPARTMENT' ];
masterImplementingDept324=[324,25,'60 ', '600006 ', 'MAHARASHTRA JEEVAN PRADHIKARAN' ];
masterImplementingDept325=[325,25,'60 ', '600007 ', 'WOMEN AND CHILD DEVELOPMENT DEPARTMENT' ];
masterImplementingDept326=[326,25,'60 ', '600008 ', 'FISHERIES DEPARTMENT' ];
masterImplementingDept327=[327,25,'60 ', '600009 ', 'RURAL DEVELOPMENT AND WATER CONSERVATION DEPARTMENT' ];
masterImplementingDept328=[328,25,'60 ', '600010 ', 'PUBLIC HEALTH DEPARMENT' ];
masterImplementingDept329=[329,25,'60 ', '600011 ', 'FOOD AND CIVIL SUPPLIES AND CONSUMER PROTECTION DEPARTMENT' ];
masterImplementingDept330=[330,25,'60 ', '600012 ', 'KHARLAND DEVELOPMENT DEPARTMENT' ];
masterImplementingDept331=[331,25,'60 ', 'NA ', 'Not Applicable' ];
masterImplementingDept332=[332,26,'67 ', 'NA ', 'Not Applicable' ];
masterImplementingDept333=[333,27,'68 ', '680001 ', '"DIRECTORATE OF EDUCATION, GOVT. OF GOA"' ];
masterImplementingDept334=[334,27,'68 ion', '680002 ', '"WATER RESOURCES DEPARTMENT, GOVT. OF GOA"' ];
masterImplementingDept335=[335,27,'68 ', '680003 ', '"GOA TILLARI IRRIGATION DEVELOPMENT CORPORATION, GOVT. OF GOA"' ];
masterImplementingDept336=[336,27,'68 ', '680004 ', '"DIRECTORATE OF WOMEN AND CHILD DEVELOPMENT, GOVT. OF GOA"' ];
masterImplementingDept337=[337,27,'68 ', '680005 ', '"PUBLIC WORKS DEPARTMENT, GOVT. OF GOA"' ];
masterImplementingDept338=[338,27,'68 ', '680006 ', 'Sewerage and Infrastructure Development Corporation of Goa Ltd.' ];
masterImplementingDept339=[339,27,'68 ', '680007 ', 'Goa State Infrastructure Development Corporation Limited' ];
masterImplementingDept340=[340,27,'68 ', '680008 ', '"Department of Fisheries, Govt of Goa"' ];
masterImplementingDept341=[341,27,'68 ', '680009 ', '"Goa Waste Management Corporation, Goa"' ];
masterImplementingDept342=[342,27,'68 ', 'NA ', 'Not Applicable' ];
masterImplementingDept343=[343,28,'69 ', 'NA ', 'Not Applicable' ];
masterImplementingDept344=[344,29,'70 ', '700001 ', 'DHFW' ];
masterImplementingDept345=[345,29,'70 ', '700002 ', 'MPSEB' ];
masterImplementingDept346=[346,29,'70 ', '700003 ', 'MPWLC' ];
masterImplementingDept347=[347,29,'70 ', '700004 ', 'NVDA' ];
masterImplementingDept348=[348,29,'70 ', '700005 ', 'PWD' ];
masterImplementingDept349=[349,29,'70 ', '700006 ', 'RSK' ];
masterImplementingDept350=[350,29,'70 ', '700007 ', 'WRD' ];
masterImplementingDept351=[351,29,'70 ', '700008 ', 'Department of Technical Education and Skill Devlopment' ];
masterImplementingDept352=[352,29,'70 ', '700009 ', 'Women and Child Development Department' ];
masterImplementingDept353=[353,29,'70 ', '700010 ', 'Madhya Padesh Jal Nigam Maryadit - MPJNM' ];
masterImplementingDept354=[354,29,'70 ', 'NA ', 'Not Applicable' ];
masterImplementingDept355=[355,30,'71 ', '710001 ', 'WATER RESOURCES DEPARTMENT' ];
masterImplementingDept356=[356,30,'71 ', '710002 ', 'PUBLIC WORK DEPARTMENT' ];
masterImplementingDept357=[357,30,'71 ', '710003 ', 'PANCHYATI RAJ DEPARTMENT' ];
masterImplementingDept358=[358,30,'71 ', '710004 ', 'WOMEN AND CHILD WELFARE DEPARTMENT' ];
masterImplementingDept359=[359,30,'71 ', '710005 ', 'FOOD AND CIVIL SUPPLIES DEPARTMENT' ];
masterImplementingDept360=[360,30,'71 ', '710006 ', 'CO-OPERATION DEPARTMENT' ];
masterImplementingDept361=[361,30,'71 ', '710007 ', 'Public Health Engineering Department' ];
masterImplementingDept362=[362,30,'71 ', '710008 ', 'CHHATTISGARH KAMDHENU UNIVERSITY' ];
masterImplementingDept363=[363,30,'71 ', '710009 ', 'ENERGY DEPARTMENT' ];
masterImplementingDept364=[364,30,'71 ', '710010 ', 'AGRICULTURE DEPARTMENT' ];
masterImplementingDept365=[365,30,'71 ', '710011 ', 'Animal Husbandry Department' ];
masterImplementingDept366=[366,30,'71 ', '710012 ', 'SC-ST DEVELOPMENT DEPARTMENT' ];
masterImplementingDept367=[367,30,'71 ', 'NA ', 'ENERGY DEPARTMENT' ];
masterImplementingDept368=[368,31,'80 ', '35 ', 'WATER RESOURCES DEPARTMENT' ];
masterImplementingDept369=[369,31,'80 ', '800001 ', 'AGRICULTURE DEPT' ];
masterImplementingDept370=[370,31,'80 ', '800002 ', 'ANIMAL HUSBANDRY DEPT' ];
masterImplementingDept371=[371,31,'80 ', '800003 ', 'SUGARCANE DEPT' ];
masterImplementingDept372=[372,31,'80 ', '800004 ', 'DEPT. OF TECHINAL EDUCATION' ];
masterImplementingDept373=[373,31,'80 ', '800005 ', 'FOREST' ];
masterImplementingDept374=[374,31,'80 ', '800006 ', 'FOREST DEPT.' ];
masterImplementingDept375=[375,31,'80 ', '800007 ', 'HORTICULTURE DEPT' ];
masterImplementingDept376=[376,31,'80 ', '800008 ', 'PANCHAYATI RAJ DEPT.' ];
masterImplementingDept377=[377,31,'80 ', '800009 ', 'ROADS AND BUILDINGS DEPT.' ];
masterImplementingDept378=[378,31,'80 ', '800010 ', 'RURAL DEVELOPMENT DEPT.' ];
masterImplementingDept379=[379,31,'80 ', '800011 ', 'SERICULTURE DEPT.' ];
masterImplementingDept380=[380,31,'80 ', '800012 ', 'AP SOCIAL WELFARE EDUCATIONAL SOCIETY' ];
masterImplementingDept381=[381,31,'80 ', '800013 ', 'WOMEN DEVELOPMENT AND CHILD WELFARE DEPT' ];
masterImplementingDept382=[382,31,'80 ', '800014 ', 'COMMISSIONERATE OF INTERMEDIATE EDUCATION' ];
masterImplementingDept383=[383,31,'80 ', '800015 ', 'TRIBAL WELFARE ENGINEERING DEPARTMENT' ];
masterImplementingDept384=[384,31,'80 ', '800016 ', 'AP TRIBAL POWER CORPORATION' ];
masterImplementingDept385=[385,31,'80 ', '800017 ', 'SOCIAL WELFARE ENGINEERING DEPARTMENT' ];
masterImplementingDept386=[386,31,'80 ', '800018 ', 'AP STATE IRRIGATION DEVELOPMENT CORPORATION' ];
masterImplementingDept387=[387,31,'80 ', '800019 ', 'IRRIGATION AND COMMAND AREA DEVELOPMENT' ];
masterImplementingDept388=[388,31,'80 ', '800020 ', 'AP HEALTH AND MEDICAL INFRASTRUCTURE DEVELOPMENT CORPORATION' ];
masterImplementingDept389=[389,31,'80 ', '800021 ', 'GIRIJAN CORPORATION LTD' ];
masterImplementingDept390=[390,31,'80 ', '800022 ', 'SOCIAL WELFARE SOCIETY' ];
masterImplementingDept391=[391,31,'80 ', '800023 ', 'HORTICULTURE UNIVERSITY' ];
masterImplementingDept392=[392,31,'80 ', '800024 ', 'AP STATE WAREHOUSING CORPORATION' ];
masterImplementingDept393=[393,31,'80 ', '800025 ', 'AGRICULTURAL MARKETING DEPARTMENT' ];
masterImplementingDept394=[394,31,'80 ', '800026 ', 'CO-OPERATION DEPARTMENT' ];
masterImplementingDept395=[395,31,'80 ', '800027 ', '"HEALTH, MEDICAL AND FAMILY WELFARE DEPARTMENT"' ];
masterImplementingDept396=[396,31,'80 ', '800028 ', 'TELANGANA RESIDENTIAL EDUCATIONAL INSTTITUTIONS SOCIETY' ];
masterImplementingDept397=[397,31,'80 ', '800029 ', 'FISHERIES DEPARTMENT' ];
masterImplementingDept398=[398,31,'80 ', '800032 ', 'Telangana Residential Educational Institutions Society' ];
masterImplementingDept399=[399,31,'80 ', '800033 ', 'Rural Water Supply & Sanitation Department' ];
masterImplementingDept400=[400,31,'80 ', '800034 ', 'BC Welfare GoAP' ];
masterImplementingDept401=[401,31,'80 ', '80030 ', 'AGRICULTURAL UNIVERSITY' ];
masterImplementingDept402=[402,31,'80 ', '80031 ', 'VETERINARY UNIVERSITY' ]
masterImplementingDept403=[403,31,'80 ', '80032 ', 'APREIS' ]
masterImplementingDept404=[404,31,'80 ', '80033 ', 'Department of Employment and Training' ]
masterImplementingDept405=[405,31,'80 ', 'NA ', 'Not Applicable' ]
masterImplementingDept406=[406,32,'81 ', '35 ', 'WATER RESOURCES DEPARTMENT' ]
masterImplementingDept407=[407,32,'81 ', '800001 ', 'AGRICULTURE DEPT' ]
masterImplementingDept408=[408,32,'81 ', '800002 ', 'ANIMAL HUSBANDRY DEPT' ]
masterImplementingDept409=[409,32,'81 ', '800003 ', 'SUGARCANE DEPT' ]
masterImplementingDept410=[410,32,'81 ', '800004 ', 'DEPT. OF TECHINAL EDUCATION' ]
masterImplementingDept411=[411,32,'81 ', '800005 ', 'FOREST' ]
masterImplementingDept412=[412,32,'81 ', '800006 ', 'FOREST DEPT.' ]
masterImplementingDept413=[413,32,'81 ', '800007 ', 'HORTICULTURE DEPT' ]
masterImplementingDept414=[414,32,'81 ', '800008 ', 'PANCHAYATI RAJ DEPT.' ]
masterImplementingDept415=[415,32,'81 ', '800009 ', 'ROADS AND BUILDINGS DEPT.' ]
masterImplementingDept416=[416,32,'81 ', '800010 ', 'RURAL DEVELOPMENT DEPT.' ]
masterImplementingDept417=[417,32,'81 ', '800011 ', 'SERICULTURE DEPT.' ]
masterImplementingDept418=[418,32,'81 ', '800012 ', 'AP SOCIAL WELFARE EDUCATIONAL SOCIETY' ]
masterImplementingDept419=[419,32,'81 ', '800013 ', 'WOMEN DEVELOPMENT AND CHILD WELFARE DEPT' ]
masterImplementingDept420=[420,32,'81 ', '800014 ', 'COMMISSIONERATE OF INTERMEDIATE EDUCATION' ]
masterImplementingDept421=[421,32,'81 ', '800015 ', 'TRIBAL WELFARE ENGINEERING DEPARTMENT' ]
masterImplementingDept422=[422,32,'81 ', '800016 ', 'AP TRIBAL POWER CORPORATION' ]
masterImplementingDept423=[423,32,'81 ', '800017 ', 'SOCIAL WELFARE ENGINEERING DEPARTMENT' ]
masterImplementingDept424=[424,32,'81 ', '800018 ', 'AP STATE IRRIGATION DEVELOPMENT CORPORATION' ]
masterImplementingDept425=[425,32,'81 ', '800019 ', 'IRRIGATION AND COMMAND AREA DEVELOPMENT' ]
masterImplementingDept426=[426,32,'81 ', '800020 ', 'AP HEALTH AND MEDICAL INFRASTRUCTURE DEVELOPMENT CORPORATION' ]
masterImplementingDept427=[427,32,'81 ', '800021 ', 'GIRIJAN CORPORATION LTD' ]
masterImplementingDept428=[428,32,'81 ', '800022 ', 'SOCIAL WELFARE SOCIETY' ]
masterImplementingDept429=[429,32,'81 ', '800023 ', 'HORTICULTURE UNIVERSITY' ]
masterImplementingDept430=[430,32,'81 ', '800024 ', 'AP STATE WAREHOUSING CORPORATION' ]
masterImplementingDept431=[431,32,'81 ', '800025 ', 'AGRICULTURAL MARKETING DEPARTMENT' ]
masterImplementingDept432=[432,32,'81 ', '800026 ', 'CO-OPERATION DEPARTMENT' ]
masterImplementingDept433=[433,32,'81 ', '800027 ', '"HEALTH, MEDICAL AND FAMILY WELFARE DEPARTMENT"' ]
masterImplementingDept434=[434,32,'81 ', '800028 ', 'TELANGANA RESIDENTIAL EDUCATIONAL INSTTITUTIONS SOCIETY' ]
masterImplementingDept435=[435,32,'81 ', '800029 ', 'FISHERIES DEPARTMENT' ]
masterImplementingDept436=[436,32,'81 ', '800032 ', 'Telangana Residential Educational Institutions Society' ]
masterImplementingDept437=[437,32,'81 ', '800033 ', 'Rural Water Supply & Sanitation Department' ]
masterImplementingDept438=[438,32,'81 ', '800034 ', 'BC Welfare GoAP' ]
masterImplementingDept439=[439,32,'81 ', '80030 ', 'AGRICULTURAL UNIVERSITY' ]
masterImplementingDept440=[440,32,'81 ', '80031 ', 'VETERINARY UNIVERSITY' ]
masterImplementingDept441=[441,32,'81 ', '810033 ', 'Rural Water Supply & Sanitation Department' ]
masterImplementingDept442=[442,32,'81 ', 'NA ', 'Not Applicable' ]
masterImplementingDept443=[443,33,'84 ', '840001 ', 'ANIMAL HUSBANDRY DEPARTMENT (AH)' ]
masterImplementingDept444=[444,33,'84 ', '840002 ', 'BACKWARD CLASSES WELFARE DEPARTMENT (BCWD)' ]
masterImplementingDept445=[445,33,'84 ', '840003 ', 'BSDB' ]
masterImplementingDept446=[446,33,'84 ', '840004 ', 'DEPARTMENT OF AGRICULTURE (DOA)' ]
masterImplementingDept447=[447,33,'84 ', '840005 ', 'DEPARTMENT OF COLLEGIATE EDUCATION (DCE)' ]
masterImplementingDept448=[448,33,'84 ', '840006 ', 'DEPARTMENT OF HIGHER EDUCATION (DHE)' ]
masterImplementingDept449=[449,33,'84 ', '840007 ', 'DEPARTMENT OF HORTICULTURE (DOH)' ]
masterImplementingDept450=[450,33,'84 ', '840008 ', 'DEPARTMENT OF PUBLIC INSTRUCTION (DPI)' ]
masterImplementingDept451=[451,33,'84 ', '840009 ', 'EDUCATION ( PRE UNIVERSITY) DEPARTMENT (DPU)' ]
masterImplementingDept452=[452,33,'84 ', '840010 ', 'FISHERIES DEPARTMENT' ]
masterImplementingDept453=[453,33,'84 ', '840011 ', 'HEALTH AND FAMILY WELFARE SERVICES (HEALTH DEPARTMENT)' ]
masterImplementingDept454=[454,33,'84 ', '840012 ', 'HKDB' ]
masterImplementingDept455=[455,33,'84 ', '840013 ', 'KARNATAKA STATE AGRICULTURAL MARKETING BOARD(KSAMB)' ]
masterImplementingDept456=[456,33,'84 ', '840014 ', 'KARNATAKA STATE RESIDENTIAL EDUCATIONAL INSTITUTIONAL SOCIETY (KREIS)' ]
masterImplementingDept457=[457,33,'84 ', '840015 ', 'KARNATAKA STATE WAREHOUSING CORPORATION (KSWC)' ]
masterImplementingDept458=[458,33,'84 ', '840016 ', 'KRRDA' ]
masterImplementingDept459=[459,33,'84 ', '840017 ', 'LABOUR DEPARTMENT' ]
masterImplementingDept460=[460,33,'84 ', '840018 ', 'MADB' ]
masterImplementingDept461=[461,33,'84 ', '840019 ', '"PUBLIC WORKS, PORTS AND IWT DEPARTMENT (PWD)"' ]
masterImplementingDept462=[462,33,'84 ', '840020 ', 'RURAL DEVELOPMENT AND PANCHAYAT RAJ DEPARTMENT (RDPR)' ]
masterImplementingDept463=[463,33,'84 ', '840021 ', 'SERICULTURE DEPARTMENT (DOS)' ]
masterImplementingDept464=[464,33,'84 ', '840022 ', 'SOCIAL WELFARE DEPARTMENT (SWD)' ]
masterImplementingDept465=[465,33,'84 ', '840023 ', 'TOURISM DEPARTMENT' ]
masterImplementingDept466=[466,33,'84 ', '840024 ', '"WATER RESOURCES DEPARTMENT (WRD,M AND M)"' ]
masterImplementingDept467=[467,33,'84 ', '840025 ', '"WATER RESOURCES DEPARTMENT (WRD,MI)"' ]
masterImplementingDept468=[468,33,'84 ', '840026 ', 'WATERSHED DEVELOPMENT DEPARTMENT (WDD)' ]
masterImplementingDept469=[469,33,'84 ', '840027 ', 'WOMEN AND CHILD DEVELOPMENT DEPARTMENT (WCDD)' ]
masterImplementingDept470=[470,33,'84 ', '840028 ', 'CO-OPERATION DEPARTMENT' ]
masterImplementingDept471=[471,33,'84 ', '840030 ', 'Department of Commerce and Industries' ]
masterImplementingDept472=[472,33,'84 ', 'NA ', 'Not Applicable' ]
masterImplementingDept473=[473,34,'89 ', 'NA ', 'Not Applicable' ]
masterImplementingDept474=[474,35,'90 ', '900001 ', 'ADI DRAVIDAR AND TRIBAL WELFARE' ]
masterImplementingDept475=[475,35,'90 ', '900002 ', 'AGRICULTURE' ]
masterImplementingDept476=[476,35,'90 ', '900003 ', 'ANIMAL HUSBANDRY DAIRY AND FISHERIES' ]
masterImplementingDept477=[477,35,'90 ', '900004 ', 'BC MBC AND MINORITIES WELFARE' ]
masterImplementingDept478=[478,35,'90 ', '900005 ', 'COMMERCIAL TAXES AND REGISTRATION' ]
masterImplementingDept479=[479,35,'90 ', '900006 ', '"CO-OPERATION, FOOD AND CONSUMER PROTECTION"' ]
masterImplementingDept480=[480,35,'90 ', '900007 ', 'ENERGY' ]
masterImplementingDept481=[481,35,'90 ', '900008 ', 'ENVIRONMENT AND FORESTS' ]
masterImplementingDept482=[482,35,'90 ', '900009 ', 'FINANCE' ]
masterImplementingDept483=[483,35,'90 ', '900010 ', '"HANDLOOMS, HANDICRAFTS, TEXTILES AND KHADI"' ]
masterImplementingDept484=[484,35,'90 ', '900011 ', 'HEALTH AND FAMILY WELFARE' ]
masterImplementingDept485=[485,35,'90 ', '900012 ', 'HIGHER EDUCATION' ]
masterImplementingDept486=[486,35,'90 ', '900013 ', 'HIGHWAYS AND MINOR PORTS' ]
masterImplementingDept487=[487,35,'90 ', '900014 ', '"HOME, PROHIBITION AND EXCISE"' ]
masterImplementingDept488=[488,35,'90 ', '900015 ', 'HOUSING AND URBAN DEVELOPMENT' ]
masterImplementingDept489=[489,35,'90 ', '900016 ', 'INDUSTRIES' ]
masterImplementingDept490=[490,35,'90 ', '900017 ', 'INFORMATION TECHNOLOGY' ]
masterImplementingDept491=[491,35,'90 ', '900018 ', 'LABOUR AND EMPLOYMENT' ]
masterImplementingDept492=[492,35,'90 ', '900019 ', 'LAW' ]
masterImplementingDept493=[493,35,'90 ', '900020 ', 'LEGISLATIVE ASSEMBLY' ]
masterImplementingDept494=[494,35,'90 ', '900021 ', 'MICRO SMALL AND MEDIUM ENTERPRISES DEPARTMENT' ]
masterImplementingDept495=[495,35,'90 ', '900022 ', 'MUNICIPAL ADMINISTRATION AND WATER SUPPLY' ]
masterImplementingDept496=[496,35,'90 ', '900023 ', 'PERSONNEL AND ADMINISTRATIVE REFORMS' ]
masterImplementingDept497=[497,35,'90 ', '900024 ', '"PLANNING, DEVELOPMENT AND SPECIAL INITIATIVES"' ]
masterImplementingDept498=[498,35,'90 ', '900025 ', 'PUBLIC' ]
masterImplementingDept499=[499,35,'90 ', '900026 ', 'PUBLIC WORKS' ]
masterImplementingDept500=[500,35,'90 ', '900027 ', 'REVENUE' ]
masterImplementingDept501=[501,35,'90 ', '900028 ', 'RURAL DEVELOPMENT AND PANCHAYAT RAJ DEPARTMENT' ]
masterImplementingDept502=[502,35,'90 ', '900029 ', 'SCHOOL EDUCATION' ]
masterImplementingDept503=[503,35,'90 ', '900030 ', 'SOCIAL REFORMS DEPARTMENT' ]
masterImplementingDept504=[504,35,'90 ', '900031 ', 'SOCIAL WELFARE AND NUTRITIOUS MEAL PROGRAMME' ]
masterImplementingDept505=[505,35,'90 ', '900032 ', 'SPECIAL PROGRAMME IMPLEMENTATION' ]
masterImplementingDept506=[506,35,'90 ', '900033 ', 'TAMIL DEV RELIGIOUS ENDOWMENTS AND INFORMATION' ]
masterImplementingDept507=[507,35,'90 ', '900034 ', 'TOURISM AND CULTURE' ]
masterImplementingDept508=[508,35,'90 ', '900035 ', 'TRANSPORT' ]
masterImplementingDept509=[509,35,'90 ', '900036 ', 'WELFARE OF DIFFERENTLY ABLED PERSONS' ]
masterImplementingDept510=[510,35,'90 ', '900037 ', 'YOUTH WELFARE AND SPORTS DEVELOPMENT' ]
masterImplementingDept511=[511,35,'90 ', '900039 ', 'AAVIN (TAMIL NADU COOPERATIVE MILK PRODUCERS FEDERATION)' ]
masterImplementingDept512=[512,35,'90 ', '900040 ', 'ADI DRAVIDAR HOUSING AND DEVELOPMENT CORPORATION (TAHDCO)' ]
masterImplementingDept513=[513,35,'90 ', '900041 ', '"ADYAR POONGA, CREEK AND ESTUARY"' ]
masterImplementingDept514=[514,35,'90 ', '900042 ', 'AIDS CONTROL SOCIETY (TANSACS)' ]
masterImplementingDept515=[515,35,'90 ', '900043 ', 'ARASU RUBBER CORPORATION LTD' ]
masterImplementingDept516=[516,35,'90 ', '900044 ', 'ASSOCIATION OF STATE ROAD TRANSPORT UNDERTAKINGS' ]
masterImplementingDept517=[517,35,'90 ', '900045 ', 'CHENNAI CORPORATION AIDS PREVENTION AND CONTROL SOCIETY' ]
masterImplementingDept518=[518,35,'90 ', '900046 ', 'CHENNAI METRO RAIL LIMITED' ]
masterImplementingDept519=[519,35,'90 ', '900047 ', 'CHENNAI METRO WATER SUPPLY AND SEWERAGE BOARD (CMWSANDSB)' ]
masterImplementingDept520=[520,35,'90 ', '900048 ', 'CHENNAI METROPOLITAN DEVELOPMENT AUTHORITY (CMDA)' ]
masterImplementingDept521=[521,35,'90 ', '900049 ', 'CO-OPTEX' ]
masterImplementingDept522=[522,35,'90 ', '900050 ', '"DOMESTIC AND EXPORT MARKET INTELLIGENCE CELL, TN"' ]
masterImplementingDept523=[523,35,'90 ', '900051 ', 'ELECTRICAL LICENCING BOARD (TNELB)' ]
masterImplementingDept524=[524,35,'90 ', '900052 ', 'ELECTRICITY BOARD (TNEB LTD)' ]
masterImplementingDept525=[525,35,'90 ', '900053 ', 'ELECTRONICS CORPORATION OF TAMILNADU (ELCOT)' ]
masterImplementingDept526=[526,35,'90 ', '900054 ', 'EMPLOYEES STATE INSURANCE - COIMBATORE' ]
masterImplementingDept527=[527,35,'90 ', '900055 ', 'ENERGY DEVELOPMENT AGENCY (TEDA)' ]
masterImplementingDept528=[528,35,'90 ', '900056 ', 'INDUSTRIAL AND TECHNOLOGICAL CONSULTANCY ORGANISATION OF TN (ITCOT) ' ]
masterImplementingDept529=[529,35,'90 ', '900057 ', 'INDUSTRIAL DEVELOPMENT CORPORATION (TIDCO)' ]
masterImplementingDept530=[530,35,'90 ', '900058 ', 'INFORMATION TECHNOLOGY PARK - CHENNAI (TIDEL)' ]
masterImplementingDept531=[531,35,'90 ', '900059 ', '"INTEGRATED CHILD DEVELOPMENT SERVICES, TAMIL NADU"' ]
masterImplementingDept532=[532,35,'90 ', '900060 ', 'MARITIME ACADEMY' ]
masterImplementingDept533=[533,35,'90 ', '900061 ', 'METROPOLITAN TRANSPORT CORPORATION (CHENNAI) LTD.' ]
masterImplementingDept534=[534,35,'90 ', '900062 ', 'NON-FORMAL AND ADULT EDUCATION - STATE RESOURCE CENTRE (SRC)' ]
masterImplementingDept535=[535,35,'90 ', '900063 ', 'OVERSEAS MANPOWER CORPORATION ' ]
masterImplementingDept536=[536,35,'90 ', '900064 ', 'SAGOSERVE' ]
masterImplementingDept537=[537,35,'90 ', '900065 ', 'SCHOOL TEXT BOOKS ONLINE' ]
masterImplementingDept538=[538,35,'90 ', '900066 ', 'SLUM CLEARANCE BOARD ' ]
masterImplementingDept539=[539,35,'90 ', '900067 ', 'SMALL INDUSTRIES DEVELOPMENT CORPORATION LTD (SIDCO)' ]
masterImplementingDept540=[540,35,'90 ', '900068 ', 'SPORTS DEVELOPMENT AUTHORITY' ]
masterImplementingDept541=[541,35,'90 ', '900069 ', 'STATE CHILD LABOUR REHABILITATION CUM WELFARE SOCIETY ' ]
masterImplementingDept542=[542,35,'90 ', '900070 ', 'STATE ENVIRONMENT IMPACT ASSEMENT AUTHORITY (SEIAA)' ]
masterImplementingDept543=[543,35,'90 ', '900071 ', 'STATE EXPRESS TRANSPORT CORPORATION ;' ]
masterImplementingDept544=[544,35,'90 ', '900072 ', 'STATE INDUSTRIES PROMOTION CORPORATION (SIPCOT) ' ]
masterImplementingDept545=[545,35,'90 ', '900073 ', 'STATE MARKETING CORPORATION LTD (TASMAC)' ]
masterImplementingDept546=[546,35,'90 ', '900074 ', 'TAMIL NADU CIVIL SUPPLIES CORPORATION LTD' ]
masterImplementingDept547=[547,35,'90 ', '900075 ', 'TAMIL NADU CO-OPERATIVE MARKETING FEDERATION LTD. (TANFED)' ]
masterImplementingDept548=[548,35,'90 ', '900076 ', 'TAMIL NADU CO-OPERATIVE SUGAR FEDERATION LTD. (TNCSF)' ]
masterImplementingDept549=[549,35,'90 ', '900077 ', 'TAMIL NADU E-GOVERNANCE AGENCY' ]
masterImplementingDept550=[550,35,'90 ', '900078 ', 'TAMIL NADU ELECTRICAL LICENCING BOARD' ]
masterImplementingDept551=[551,35,'90 ', '900079 ', 'TAMIL NADU FOREST PLANTATION CORPORATION LTD' ]
masterImplementingDept552=[552,35,'90 ', '900080 ', 'TAMIL NADU HOUSING BOARD' ]
masterImplementingDept553=[553,35,'90 ', '900081 ', 'TAMIL NADU INDUSTRIAL INVESTMENT CORPORATION (TIIC)' ]
masterImplementingDept554=[554,35,'90 ', '900082 ', 'TAMIL NADU MAGNESITE LTD (TANMAG)' ]
masterImplementingDept555=[555,35,'90 ', '900083 ', 'TAMIL NADU MARITIME BOARD' ]
masterImplementingDept556=[550,35,'90 ', '900084 ', 'TAMIL NADU MINERALS LTD (TAMIN)' ]
masterImplementingDept557=[557,35,'90 ', '900085 ', 'TAMIL NADU NEWSPRINT AND PAPERS LIMITED (TNPL)' ]
masterImplementingDept558=[558,35,'90 ', '900086 ', 'TAMIL NADU POLLUTION CONTROL BOARD' ]
masterImplementingDept559=[559,35,'90 ', '900087 ', 'TAMIL NADU POWER FINANCE AND INFRASTRUCTURE DEVELOPMENT CORPORATION LTD.' ]
masterImplementingDept560=[560,35,'90 ', '900088 ', 'TAMIL NADU SMALL INDUSTRIES CORPORATION LTD (TANSI)' ]
masterImplementingDept561=[561,35,'90 ', '900089 ', 'TAMIL NADU STATE COUNCIL FOR SCIENCE AND TECHNOLOGY' ]
masterImplementingDept562=[562,35,'90 ', '900090 ', 'TAMIL NADU STATE LAND USE BOARD' ]
masterImplementingDept563=[563,35,'90 ', '900091 ', 'TAMIL NADU STATE TRANSPORT CORPORATION LTD.' ]
masterImplementingDept564=[564,35,'90 ', '900092 ', 'TAMIL NADU TEA PLANTATION CORPORATION ' ]
masterImplementingDept565=[565,35,'90 ', '900093 ', 'TAMIL NADU TRADERS WELFARE BOARD' ]
masterImplementingDept566=[566,35,'90 ', '900094 ', 'TAMIL NADU UNIFORMED SERVICE RECRUITMENT BOARD' ]
masterImplementingDept567=[567,35,'90 ', '900095 ', 'TAMIL NADU URBAN INFRASTRCUTURE FINANCIAL SERVICES LTD. (TNUIFSL)' ]
masterImplementingDept568=[568,35,'90 ', '900096 ', 'TANGEDCO LTD' ]
masterImplementingDept569=[569,35,'90 ', '900097 ', 'TANTRANSCO LTD ' ]
masterImplementingDept570=[570,35,'90 ', '900098 ', 'TEACHERS RECRUITMENT BOARD (TRB)' ]
masterImplementingDept571=[571,35,'90 ', '900099 ', 'TOURISM DEVELOPMENT CORPORATION LTD (TTDC)' ]
masterImplementingDept572=[572,35,'90 ', '900100 ', 'TTDC ONLINE BOOKING OF TOURS AND HOTEL ACCOMMODATION' ]
masterImplementingDept573=[573,35,'90 ', '900101 ', 'TWAD BOARD - RAIN WATER HARVESTING' ]
masterImplementingDept574=[574,35,'90 ', '900102 ', 'WAKF BOARD' ]
masterImplementingDept575=[575,35,'90 ', '900103 ', 'WATER SUPPLY AND DRAINAGE BOARD (TWAD)' ]
masterImplementingDept576=[576,35,'90 ', '900104 ', 'WOMEN DEVELOPMENT CORPORATION LIMITED ' ]
masterImplementingDept577=[577,35,'90 ', 'NA', 'Not Applicable' ]    //D
masterImplementingDept578=[578,36,'96 ', '960002 ', 'Department of Agriculture Engg' ]
masterImplementingDept579=[579,36,'96 ', '960003 ', 'Agriculture Dairy Dept' ]
masterImplementingDept580=[580,36,'96 ', '960004 ', 'Kerala Land Devpt Corpn' ]
masterImplementingDept581=[581,36,'96 ', '960005 ', 'Kerala State Warehousing Corp' ]
masterImplementingDept582=[582,36,'96 ', '960006 ', 'Dept of Soil Survey and Conservation' ]
masterImplementingDept583=[583,36,'96 ', '960007 ', 'Animal Husbandry Dept' ]
masterImplementingDept584=[584,36,'96 ', '960008 ', 'Cashew Devpt Corpn' ]
masterImplementingDept585=[585,36,'96 ', '960009 ', 'Cooperation Department' ]
masterImplementingDept586=[586,36,'96 ', '960010 ', 'CRD' ]
masterImplementingDept587=[587,36,'96 ', '960011 ', 'Local Self Govt (Panchayat) Dept' ]
masterImplementingDept588=[588,36,'96 ', '960012 ', 'Environment Department' ]
masterImplementingDept589=[589,36,'96 ', '960013 ', 'Department of Fisheries' ]
masterImplementingDept590=[590,36,'96 ', '960014 ', 'Harbour Engineering Dept' ]
masterImplementingDept591=[591,36,'96 ', '960015 ', 'Forest Department' ]
masterImplementingDept592=[592,36,'96 ', '960016 ', 'General Education Dept' ]
masterImplementingDept593=[593,36,'96 ', '960017 ', 'Health and Family Welfare' ]
masterImplementingDept594=[594,36,'96 ', '960018 ', 'Higher Education Dept' ]
masterImplementingDept595=[595,36,'96 ', '960019 ', 'Information Technology' ]
masterImplementingDept596=[596,36,'96 ', '960020 ', 'Kerala Land Devpt Board' ]
masterImplementingDept597=[597,36,'96 ', '960021 ', 'Kerala Water Authority' ]
masterImplementingDept598=[598,36,'96 ', '960022 ', 'Irrigation Department' ]
masterImplementingDept599=[599,36,'96 ', '960023 ', 'Public Works Department' ]
masterImplementingDept600=[600,36,'96 ', '960024 ', 'Tourism Department' ]
masterImplementingDept601=[601,36,'96 ', '960025 ', 'District Administration Kasargod' ]
masterImplementingDept602=[602,36,'96 ', '960026 ', 'Social Justice Department' ]
masterImplementingDept603=[603,36,'96 ', '960027 ', 'Scheduled Tribe Development Department' ]
masterImplementingDept604=[604,36,'96 ', '960028 ', 'Power Department' ]
masterImplementingDept605=[605,36,'96 ', '960029 ', 'Department of Ports' ]
masterImplementingDept606=[606,36,'96 ', '960030 ', 'SUPPLYCO' ]
masterImplementingDept607=[607,36,'96 ', '960031 ', 'KVASU' ]
masterImplementingDept608=[608,36,'96 ', '960032 ', 'Hill Area Development Agency' ]
masterImplementingDept609=[609,36,'96 ', '960033 ', 'Housing Department' ]
masterImplementingDept610=[610,36,'96 ', '960034 ', 'Kerala Industrial Infrastructure Devleopment Corporation (KINFRA)' ]
masterImplementingDept611=[611,36,'96 ', 'NA ', 'Not Applicable' ]
masterImplementingDept612=[612,37,'99 ', '990001 ', 'Accounts and Treasuries ' ]
masterImplementingDept613=[613,37,'99 ', '990002 ', 'Adi Dravidar Welfare ' ]
masterImplementingDept614=[614,37,'99 ', '990003 ', 'Agriculture ' ]
masterImplementingDept615=[615,37,'99 ', '990004 ', 'Animal Husbandry  - Animal Welfare ' ]
masterImplementingDept616=[616,37,'99 ', '990005 ', 'Arts and Culture ' ]
masterImplementingDept617=[617,37,'99 ', '990006 ', 'Chief Vigilance Office ' ]
masterImplementingDept618=[618,37,'99 ', '990007 ', 'Civil Supplies - Consumer Affairs ' ]
masterImplementingDept619=[619,37,'99 ', '990008 ', 'Commercial Taxes  ' ]
masterImplementingDept620=[620,37,'99 ', '990009 ', 'Directorate of School Education ' ]
masterImplementingDept621=[621,37,'99 ', '990010 ', 'District Rural Development Agency ' ]
masterImplementingDept622=[622,37,'99 ', '990011 ', 'Economics - Statistics ' ]
masterImplementingDept623=[623,37,'99 ', '990012 ', 'Election Department ' ]
masterImplementingDept624=[624,37,'99 ', '990013 ', 'Electricity Department ' ]
masterImplementingDept625=[625,37,'99 ', '990014 ', 'Forest ' ]
masterImplementingDept626=[626,37,'99 ', '990015 ', 'Health ' ]
masterImplementingDept627=[627,37,'99 ', '990016 ', 'Higher and Technical Education ' ]
masterImplementingDept628=[628,37,'99 ', '990017 ', 'Industries - Commerce ' ]
masterImplementingDept629=[629,37,'99 ', '990018 ', 'Information - Publicity ' ]
masterImplementingDept630=[630,37,'99 ', '990019 ', 'Information Technology ' ]
masterImplementingDept631=[631,37,'99 ', '990020 ', 'Law  ' ]
masterImplementingDept632=[632,37,'99 ', '990021 ', 'Law  - UTPLSA  ' ]
masterImplementingDept633=[633,37,'99 ', '990022 ', 'Labour  ' ]
masterImplementingDept634=[634,37,'99 ', '990023 ', 'Personnel and Administrative Reforms ' ]
masterImplementingDept635=[635,37,'99 ', '990024 ', 'Port ' ]
masterImplementingDept636=[636,37,'99 ', '990025 ', 'Planning - Research ' ]
masterImplementingDept637=[637,37,'99 ', '990026 ', 'Police Department ' ]
masterImplementingDept638=[638,37,'99 ', '990027 ', 'Prisons' ]
masterImplementingDept639=[639,37,'99 ', '990028 ', 'Public Works Department' ]
masterImplementingDept640=[640,37,'99 ', '990029 ', 'Registrar of Co-operative Societies' ]
masterImplementingDept641=[641,37,'99 ', '990030 ', 'Revenue - Disaster Management' ]
masterImplementingDept642=[642,37,'99 ', '990031 ', 'Science - Technology - Environment' ]
masterImplementingDept643=[643,37,'99 ', '990032 ', 'Social Welfare' ]
masterImplementingDept644=[644,37,'99 ', '990033 ', 'Stationery - Printing' ]
masterImplementingDept645=[645,37,'99 ', '990034 ', 'Tourism' ]
masterImplementingDept646=[646,37,'99 ', '990035 ', 'Town and Country Planning' ]
masterImplementingDept647=[647,37,'99 ', '990036 ', 'Transport Department' ]
masterImplementingDept648=[648,37,'99 ', '990037 ', 'Women and Child Development' ]
masterImplementingDept649=[649,37,'99 ', '990050 ', 'Puducherry Agro Service and Industrial Corporation Limited (PASIC)  ' ]
masterImplementingDept650=[650,37,'99 ', '990051 ', 'Puducherry Industrial Promotion Development and Investment Corporation Limited ( PIPDIC ) ' ]
masterImplementingDept651=[651,37,'99 ', '990052 ', 'Puducherry Housing Board ( PHB ) ' ]
masterImplementingDept652=[652,37,'99 ', '990053 ', 'Puducherry Polution Control Committee (PPCC ) ' ]
masterImplementingDept653=[653,37,'99 ', '990054 ', 'Puducherry  Slum Clearance Board    ( P S C B ) ' ]
masterImplementingDept654=[654,37,'99 ', '990055 ', 'Pondicherry Institute of Hotel Management - Catering Technology ' ]
masterImplementingDept655=[655,37,'99 ', '990056 ', 'Puducherry Power Corporation Limtied ( PPCL )' ]
masterImplementingDept656=[656,37,'99 ', '990057 ', 'Puducherry Women Commission' ]
masterImplementingDept657=[657,37,'99 ', 'NA ', 'Not Applicable' ]


masterSubSector1=[1,'011','Agriculture'];
masterSubSector2=[2,'012','Animal Husbandry'];
masterSubSector3=[3,'013','Area Treatment of Watershed   '];
masterSubSector4=[4,'014','Support Services for Agriculture and Animal Husbandry'];
masterSubSector5=[5,'015','Drainage Line Treatment of Watershed'];
masterSubSector6=[6,'020','Forestry/Wasteland Development'];
masterSubSector7=[7,'021','Climate Change Adaptation & Risk Mitigation'];
masterSubSector8=[8,'050','Fishery'];
masterSubSector9=[9,'099','Others'];
masterSubSector10=[10,'111','ARF'];
masterSubSector11=[11,'150','Food and Agro Processing'];
masterSubSector12=[12,'171','Manufacturing of Textile Goods'];
masterSubSector13=[13,'173','Support to Rural Artisans'];
masterSubSector14=[14,'181','Manufacturing of Ready-made Garments'];
masterSubSector15=[15,'191','Manufacturing of Leather Products'];
masterSubSector16=[16,'210','Manufacturing of Paper and Paper products'];
masterSubSector17=[17,'221','Publishing, Printing and Reproduction'];
masterSubSector18=[18,'241','Manufacturing of Basic Chemicals'];
masterSubSector19=[19,'242','Manufacturing of Chemical Products'];
masterSubSector20=[20,'252','Manufacturing of Plastic/Rubber products'];
masterSubSector21=[21,'261','Manufacturing of Glass and Glass Products'];
masterSubSector22=[22,'269','Manufacturing of Construction and Building Materials'];
masterSubSector23=[23,'292','Manufacturing of Engineering Goods'];
masterSubSector24=[24,'321','Manufacturing of Electronics Goods'];
masterSubSector25=[25,'361','Manufacturing of Furniture'];
masterSubSector26=[26,'369','Manufacturing of Sports and Athletic Goods'];
masterSubSector27=[27,'401','Generation, Transmission and Distribution of Electricity'];
masterSubSector28=[28,'410','Collection, Purification and Distribution of Water'];
masterSubSector29=[29,'450','Construction'];
masterSubSector30=[30,'451','Connectivity - Roads & Ports'];
masterSubSector31=[31,'621','Water Transport'];
masterSubSector32=[32,'650','Banking'];
masterSubSector33=[33,'672','Micro Finance'];
masterSubSector34=[34,'729','Computer and Related'];
masterSubSector35=[35,'800','Education'];
masterSubSector36=[36,'851','Health & Sanitation'];
masterSubSector37=[37,'920','Women Development'];
masterSubSector38=[38,'930','Support Services'];
masterSubSector39=[39,'931','Self Employed Activities'];
masterSubSector40=[40,'932','Livelihood Interventions'];
masterSubSector41=[41,'940','Support Services for Non-Farm Sector'];
masterSubSector42=[42,'960','Community Infrastructure'];
masterSubSector43=[43,'970','Promotional Support'];
masterSubSector44=[44,'981','Micro Enterprise'];
masterSubSector45=[45,'982','Institutional Development'];
masterSubSector46=[46,'983','Support for Innovative Practices'];
masterSubSector47=[47,'984','Infrastructure Support'];
masterSubSector48=[48,'985','Watershed Plus Activities(Loans To Ngos)'];
masterSubSector49=[49,'986','Project Management'];

masterPurpose1=[1,1, '020' ,  '011020' ,  'Plantation and Horticulture ' ]
masterPurpose2=[2,1, '053' ,  '011053' ,  'Land Development/Soil Conservation' ]
masterPurpose3=[3,1, '054' ,  '011054' ,  'Minor/Micro Irrigation' ]
masterPurpose4=[4,1, '055' ,  '011055' ,  'Infra Works - Alternate source of Energy' ]
masterPurpose5=[5,1, '056' ,  '011056' ,  '5-10 MW Solar Photovoltaic Power Plant' ]
masterPurpose6=[6,1, '057' ,  '011057' ,  'Separate Feeder Lines' ]
masterPurpose7=[7,1, '058' ,  '011058' ,  'Command Area Development' ]
masterPurpose8=[8,1, '061' ,  '011061' ,  'Major Irrigation' ]
masterPurpose9=[9,1, '062' ,  '011062' ,  'Medium Irrigation' ]
masterPurpose10=[10,1, '063' ,  '011063' ,  'Seed/Agriculture/Horticulture Farms' ]
masterPurpose11=[11,1, '064' ,  '011064' ,  '"Grading/Certifying Mechanism, Testing/Certifying Laboratories"' ]
masterPurpose12=[12,1, '081' ,  '011081' ,  'Storage and Marketing Infrastructure' ]
masterPurpose13=[13,1, '098' ,  '011098' ,  'Agriculture - Others' ]
masterPurpose14=[14,1, '113' ,  '011113' ,  'Dedicated Rural Industrial Estates' ]
masterPurpose15=[15,1, '051' ,  '011051' ,  'Farm Mechanization' ]
masterPurpose16=[16,2, '008' ,  '012008' ,  'Animal Husbandry' ]
masterPurpose17=[17,3, '029' ,  '014029' ,  'Support Services for Agriculture' ]
masterPurpose18=[18,4, '001' ,  '020001' ,  'Forestry' ]
masterPurpose19=[19,5, '001' ,  '050001' ,  'Inland Fishery' ]
masterPurpose20=[20,6, '030' ,  '150030' ,  'Processing of Livestock Products' ]
masterPurpose21=[21,7, '001' ,  '401001' ,  'Conventional Energy Sources ' ]
masterPurpose22=[22,8, '013' ,  '451013' ,  'Fishing Harbour/Jetties' ]
masterPurpose23=[23,8, '014' ,  '451014' ,  'Inland Waterways' ]
masterPurpose24=[24,8, '015' ,  '451015' ,  'Rural Bridges' ]
masterPurpose25=[25,8, '016' ,  '451016' ,  'Rural Roads' ]
masterPurpose26=[26,8, '017' ,  '451017' ,  'Bharat Nirman' ]
masterPurpose27=[27,9, '009' ,  '729009' ,  'Information Technology in Rural Areas/Citizen Knowledge Centres' ]
masterPurpose28=[28,10, '032' ,  '800032' ,  'Rural Education Institutions' ]
masterPurpose29=[29,11, '001' ,  '851001' ,  'Public Health Institutions' ]
masterPurpose30=[30,11, '003' ,  '851003' ,  'Construction of Toilet Blocks ' ]
masterPurpose31=[31,11, '004' ,  '851004' ,  'Drainage/Waste Water Management' ]
masterPurpose32=[32,11, '009' ,  '851009' ,  'Solid Waste Management' ]
masterPurpose33=[33,11, '034' ,  '851034' ,  'Rural Drinking Water Supply' ]
masterPurpose34=[34,12, '001' ,  '960001' ,  'Community Irrigation Wells for entire village' ]
masterPurpose35=[35,12, '002' ,  '960002' ,  'Construction of Anganwadi Centres' ]
masterPurpose36=[36,12, '003' ,  '960003' ,  'Flood Protection Measures' ]
masterPurpose37=[37,12, '004' ,  '960004' ,  'Rural Libraries' ]
masterPurpose38=[38,12, '005' ,  '960005' ,  'Village Knowledge Centres' ]
masterPurpose39=[39,12, '006' ,  '960006' ,  'Desalination Plants in Coastal Areas' ]
masterPurpose40=[40,12, '007' ,  '960007' ,  'Comprehensive Infrastructure in Rural Areas' ]
masterPurpose41=[41,12, '008' ,  '960008' ,  'KVIC Industrial Estates/Centers' ] 



masterActivity1=[1,1, '020' ,  'PH0700' ,  'Nursery' , 1 ]
masterActivity2=[2,1, '020' ,  'PH0900' ,  'Plantation and Horticulture' , 1 ]
masterActivity3=[3,1, '020' ,  'PH9999' ,  'Plantation and Horticulture – Others' , 1 ]
masterActivity4=[4,1, '053' ,  'LD0300' ,  'Land Reclamation' , 2 ]
masterActivity5=[5,1, '053' ,  'LD0400' ,  'Soil Conservation' , 2 ]
masterActivity6=[6,1, '053' ,  'LD0500' ,  'Water Management' , 2 ]
masterActivity7=[7,1, '054' ,  'MI0000' ,  'Minor/Micro Irrigation' , 3 ]
masterActivity8=[8,1, '054' ,  'MI0100' ,  'Dugwell with Pumpset' , 3 ]
masterActivity9=[9,1, '054' ,  'MI0200' ,  'Shallow Tubewell with Pumpset' , 3 ]
masterActivity10=[10,1, '054' ,  'MI0400' ,  'Deep Tubewell with Pumpset' , 3 ]
masterActivity11=[11,1, '054' ,  'MI0600' ,  'Lift Irrigation including Pumphouse' , 3 ]
masterActivity12=[12,1, '054' ,  'MI0700' ,  'Drip Irrigation' , 3 ]
masterActivity13=[13,1, '054' ,  'MI0800' ,  'Sprinkler Irrigation' , 3 ]
masterActivity14=[14,1, '054' ,  'MI0900' ,  'Tanks and Reservoirs' , 3 ]
masterActivity15=[15,1, '054' ,  'MI1100' ,  'Weirs/Bunds' , 3 ]
masterActivity16=[16,1, '055' ,  'SS0201' ,  'Infra Works - Alternate source of Energy' , 4 ]
masterActivity17=[17,1, '056' ,  'NC0900' ,  '5-10 MW Solar Photovoltaic Power Plant' , 5 ]
masterActivity18=[18,1, '057' ,  'SF0100' ,  'Separate Feeder Lines' , 6 ]
masterActivity19=[19,1, '058' ,  'CA0100' ,  'Command Area Development – Field Channels' , 7 ]
masterActivity20=[20,1, '058' ,  'CA0200' ,  'Command Area Development – Filed drains' , 7 ]
masterActivity21=[21,1, '058' ,  'CA0300' ,  'Command Area Development – Land Levelling and shaping' , 7 ]
masterActivity22=[22,1, '058' ,  'CA0400' ,  'Command Area Development – Warabandi' , 7 ]
masterActivity23=[23,1, '061' ,  'MJ0100' ,  'Major Irrigation' , 8 ]
masterActivity24=[24,1, '062' ,  'MU0100' ,  'Medium Irrigation' , 9 ]
masterActivity25=[25,1, '063' ,  'AO0100' ,  'Seed/Agriculture/Horticulture Farms' , 10 ]
masterActivity26=[26,1, '064' ,  'GT0100' ,  '"Grading/Certifying Mechanism, Testing/Certifying Laboratories"' , 11 ]
masterActivity27=[27,1, '081' ,  'SM0100' ,  'Cold Storage' , 12 ]
masterActivity28=[28,1, '081' ,  'SM0300' ,  'Rural Godown' , 12 ]
masterActivity29=[29,1, '081' ,  'SM0500' ,  'Mandi' , 12 ]
masterActivity30=[30,1, '081' ,  'SM0600' ,  'Market Yard' , 12 ]
masterActivity31=[31,1, '081' ,  'SM0700' ,  'Rural Haat' , 12 ]
masterActivity32=[32,1, '081' ,  'SM1000' ,  'Warehouse' , 12 ]
masterActivity33=[33,1, '081' ,  'SM4900' ,  'Food Park' , 12 ]
masterActivity34=[34,1, '098' ,  'AO0200' ,  'Watershed Development' , 13 ]
masterActivity35=[35,1, '113' ,  'DR0100' ,  'Dedicated Rural Industrial Estates' , 14 ]
masterActivity36=[36,1, '051' ,  'FM2000' ,  'Mechanisatioon of Farm Operations  Related Services' , 15 ]
masterActivity37=[37,2, '008' ,  'AH0600' ,  'Veterinary Hospitals/ Clinics' , 16 ]
masterActivity38=[38,2, '008' ,  'AH9900' ,  'Animal Husbandry-Others' , 16 ]
masterActivity39=[39,3, '029' ,  'SS1100' ,  'Support Services for Agriculture' , 17 ]
masterActivity40=[40,4, '001' ,  'FW2500' ,  'Forestry' , 18 ]
masterActivity41=[41,5, '001' ,  'FI0200' ,  'Riverine Fisheries' , 19 ]
masterActivity42=[42,6, '030' ,  'LP0600' ,  'Modern Abattoir/Meat Processing' , 20 ]
masterActivity43=[43,7, '001' ,  'CE0600' ,  'Mini Hydel Projects/Small Hydel Projects (Upto 10 Mw)' , 21 ]
masterActivity44=[44,7, '001' ,  'CE0601' ,  'Construction of System Improvement for Power Transmission' , 21 ]
masterActivity45=[45,8, '013' ,  'CN1000' ,  'Fishing Harbour/Jetties' , 22 ]
masterActivity46=[46,8, '014' ,  'CN1100' ,  'Inland Waterways' , 23 ]
masterActivity47=[47,8, '015' ,  'CN0800' ,  'Rural Bridges' , 24 ]
masterActivity48=[48,8, '016' ,  'CN1200' ,  'Rural Roads' , 25 ]
masterActivity49=[49,8, '017' ,  'BN0100' ,  'Bharat Nirman' , 26 ]
masterActivity50=[50,9, '009' ,  'IT0100' ,  'Citizen Knowledge Centres' , 27 ]
masterActivity51=[51,9, '009' ,  'IT0200' ,  'Information Technology in Rural Areas' , 27 ]
masterActivity52=[52,10, '032' ,  'ED0300' ,  'Rural Education Institutions – Secondary Schools / Colleges' , 28 ]
masterActivity53=[53,10, '032' ,  'ED0400' ,  'Rural Education Institutions – Primary Schools' , 28 ]
masterActivity54=[54,10, '032' ,  'ED0500' ,  'Rural Education Institutions -State Agri Univ Infra' , 28 ]
masterActivity55=[55,11, '001' ,  'HS0300' ,  'Public Health Institutions' , 29 ]
masterActivity56=[56,11, '003' ,  'HS0200' ,  'Toilet Blocks in Schools Specially for Girls' , 30 ]
masterActivity57=[57,11, '003' ,  'HS0500' ,  'Pay and Use Toilets in Rural Areas' , 30 ]
masterActivity58=[58,11, '004' ,  'HS0100' ,  'Drainage/Waste Water Management Activities' , 31 ]
masterActivity59=[59,11, '009' ,  'HS0700' ,  'Solid Waste Management' , 32 ]
masterActivity60=[60,11, '034' ,  'HS0400' ,  'Rural Drinking Water Supply' , 33 ]
masterActivity61=[61,12, '001' ,  'CI0400' ,  'Community Irrigation Wells for entire village' , 34 ]
masterActivity62=[62,12, '002' ,  'CI0600' ,  'Construction of Anganwadi Centres' , 35 ]
masterActivity63=[63,12, '003' ,  'CI0800' ,  'Flood Protection Measures' , 36 ]
masterActivity64=[64,12, '004' ,  'CI1100' ,  'Rural Libraries' , 37 ]
masterActivity65=[65,12, '005' ,  'CI1200' ,  'Village Knowledge Centres' , 38 ]
masterActivity66=[66,12, '006' ,  'CI0700' ,  'Desalination Plants in Coastal Areas' , 39 ]
masterActivity67=[67,12, '007' ,  'CI0500' ,  'Comprehensive Infrastructure in Rural Areas' , 40 ]
masterActivity68=[68,12, '008' ,  'CI1000' ,  'KVIC Industrial Estates/Centers' , 41 ]


masterTrancheRow1=[5,'FINANCIAL YEAR 1999-2000',1999,'1999-04-01','2000-03-31',null];
masterTrancheRow2=[6,'FINANCIAL YEAR 2001-2002',2001,'2001-04-01','2002-03-31',null];
masterTrancheRow3=[7,'FINANCIAL YEAR 2000-2001',2000,'2000-04-01','2001-03-31',null];
masterTrancheRow4=[8,'FINANCIAL YEAR 2002-2003',2002,'2002-04-01','2003-03-31',null];
masterTrancheRow5=[9,'FINANCIAL YEAR 2003-2004',2003,'2003-04-01','2004-03-31',null];
masterTrancheRow6=[10,'FINANCIAL YEAR 2004-2005',2004,'2004-04-01','2005-03-31',null];
masterTrancheRow7=[11,'FINANCIAL YEAR 2005-2006',2005,'2005-04-01','2006-03-31',null];
masterTrancheRow8=[12,'FINANCIAL YEAR 2006-2007',2006,'2006-04-01','2007-03-31',null];
masterTrancheRow9=[13,'FINANCIAL YEAR 2007-2008',2007,'2007-04-01','2008-03-31',null];
masterTrancheRow10=[14,'FINANCIAL YEAR 2008-2009',2008,'2008-04-01','2009-03-31',null];


masterProject1=[1,'P1999900000000004572', 'KULLAMPATTI', 5, '24', '90', '926', '', '', '451015', 'CN0800', '', '', '', '', '900001', '2497000.000', '', '0.000', '0.000', '0.000', '2497000.000', '0.000', '249000.000', '2248000.000', '0.000', '0.000', '0.000', '2248000.000', '0.000', 'MP1999900000000004558'];
masterProject2=[2,'P1999900000000004573', 'KUDAKULETHUR', 5, '24', '90', '926', '', '', '451016', 'CN1200', '', '', '', '', '900001', '3128000.000', '', '0.000', '0.000', '0.000', '3128000.000', '0.000', '313000.000', '2815000.000', '0.000', '0.000', '0.000', '2815000.000', '0.000', 'MP1999900000000004558'];

  constructor(private plt: Platform, private sqlitePorter: SQLitePorter,private sqlite: SQLite) { 
    console.log("In DataBase Constructor");
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'nabard.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.database = db;
          this.database.executeSql('CREATE TABLE IF NOT EXISTS USER_MASTER (id INTEGER PRIMARY KEY,UserId TEXT,UserName TEXT,Password TEXT,RoleId TEXT,OnlinePasswordFailureAttempt TEXT,OfflinePasswordFailureAttempt TEXT,Salt TEXT)', [])
          //this.database.executeSql('CREATE TABLE IF NOT EXISTS MASTER_ACTIVITY (id INTEGER PRIMARY KEY NOT NULL,PA_PGM_SUB_SECTOR TEXT NOT NULL,PA_PGM_PURP_CODE_ACTUAL TEXT NOT NULL,PA_PGM_ACT_CODE TEXT NOT NULL,PA_PGM_ACT_DESC TEXT DEFAULT NULL,PA_PGM_PURP_CODE TEXT NOT NULL)', [])

          this.database.executeSql('CREATE TABLE IF NOT EXISTS MASTER_STATE (STATE_ID INTEGER PRIMARY KEY NOT NULL,STATE_CODE TEXT NOT NULL,STATE_NAME TEXT DEFAULT NULL)', [])

          this.database.executeSql('CREATE TABLE IF NOT EXISTS MASTER_STATE_DEPERTMENT (SD_STATE_ID INTEGER PRIMARY KEY NOT NULL,STATE_ID INTEGER NOT NULL,SD_STATE_CODE TEXT NOT NULL,SD_DEPT_CODE TEXT NOT NULL,SD_DEPT_NAME DEFAULT NULL,FOREIGN KEY (STATE_ID) REFERENCES MASTER_STATE(STATE_ID))', [])
          this.database.executeSql('CREATE TABLE IF NOT EXISTS MASTER_SUBSECTOR (SS_ID INTEGER PRIMARY KEY NOT NULL,SS_SUB_SECTOR_CODE TEXT NOT NULL,SS_SUB_SECTOR_DESCN TEXT DEFAULT NULL)', [])
          this.database.executeSql('CREATE TABLE IF NOT EXISTS MASTER_PURPOSE (PP_PGM_PURP_ID INTEGER PRIMARY KEY NOT NULL,PP_PGM_SUB_SECTOR INTEGER NOT NULL,PP_PGM_PURP_CODE_ACTUAL TEXT NOT NULL,PP_PGM_PURP_CODE TEXT NOT NULL,PP_PGM_PURP_DESCN TEXT DEFAULT NULL,FOREIGN KEY (PP_PGM_SUB_SECTOR) REFERENCES MASTER_SUBSECTOR(SS_ID))', [])
          //PROJECT_MASTER  store details after downloading
          this.database.executeSql('CREATE TABLE IF NOT EXISTS MASTER_ACTIVITY (PA_PGM_ACT_ID INTEGER PRIMARY KEY NOT NULL,PA_PGM_SUB_SECTOR INTEGER NOT NULL,PA_PGM_PURP_CODE_ACTUAL TEXT NOT NULL,PA_PGM_ACT_CODE TEXT NOT NULL,PA_PGM_ACT_DESC TEXT DEFAULT NULL,PA_PGM_PURP_CODE TEXT NOT NULL,FOREIGN KEY (PA_PGM_ACT_ID) REFERENCES MASTER_PURPOSE(PP_PGM_PURP_ID),FOREIGN KEY (PA_PGM_SUB_SECTOR) REFERENCES MASTER_SUBSECTOR(SS_ID))', [])
          this.database.executeSql('CREATE TABLE IF NOT EXISTS MASTER_TRANCHE (TR_TRANCE_CODE INTEGER PRIMARY KEY NOT NULL,TR_TRANCE_NAME TEXT DEFAULT NULL,TR_FIN_YEAR INTEGER DEFAULT NULL,TR_BEG_DATE TEXT DEFAULT NULL,TR_SANC_END_DATE TEXT DEFAULT NULL,TR_CLOSURE_DATE TEXT DEFAULT NULL)', [])

          this.database.executeSql('CREATE TABLE IF NOT EXISTS MASTER_PROJECT (NP_PROJ_ID INTEGER PRIMARY KEY,NP_PROJ_CODE TEXT NOT NULL,NP_PROJ_DESCN TEXT DEFAULT NULL,NP_TRANCHE_CODE TEXT DEFAULT NULL,NP_ACNTNG_LOC_CODE TEXT DEFAULT NULL,NP_ACNTNG_STATE_CODE TEXT DEFAULT NULL,NP_ACNTNG_DIST_CODE TEXT DEFAULT NULL,NP_ACNTNG_BLOCK_CODE TEXT DEFAULT NULL,NP_ACNTNG_VILLAGE_CODE TEXT DEFAULT NULL,NRP_PURP_CODE TEXT DEFAULT NULL,NRP_PROJ_ACT_CODE TEXT DEFAULT NULL,NRP_PROJ_SUB_ACT_CODE TEXT DEFAULT NULL,NRP_REMARKS TEXT DEFAULT NULL,NRP_PLANNED_START_DATE TEXT DEFAULT NULL,NRP_PLANNED_END_DATE TEXT DEFAULT NULL,NRP_PROJ_IMPL_STATE_DEPT TEXT DEFAULT NULL,NRP_UPDATED_TOTAL_COST TEXT DEFAULT NULL,NRP_EXP_INCURRED_CUTOFF_DATE TEXT DEFAULT NULL,NRP_EXP_INCURRED_AMT TEXT DEFAULT NULL,NRP_INELIGIBLE_COST TEXT DEFAULT NULL,NRP_CONT_BY_OTH_AGENCIES TEXT DEFAULT NULL,NRP_BAL_ELIGILBE_COST TEXT DEFAULT NULL,NRP_ELIG_LOAN_AMT_ASPER_PM TEXT DEFAULT NULL,NRP_STATE_GOVT_SHARE_ACTUAL TEXT DEFAULT NULL,NRP_ELIG_LOAN_AMT_ACTUAL TEXT DEFAULT NULL,NRP_COST_OF_DEVLPMNT TEXT DEFAULT NULL,NRP_ERR_PER TEXT DEFAULT NULL,NRP_BCR TEXT DEFAULT NULL,NRP_SANC_LOAN_AMT TEXT DEFAULT NULL,NRP_SANC_GRNT_AMT TEXT DEFAULT NULL,NRP_PROPOSAL_NUMBER TEXT DEFAULT NULL,FOREIGN KEY (NRP_PURP_CODE) REFERENCES MASTER_PURPOSE(PP_PGM_PURP_CODE))', [])




          //this.database.executeSql('CREATE TABLE IF NOT EXISTS MASTER_STATE (STATE_ID INTEGER PRIMARY KEY NOT NULL,STATE_CODE TEXT NOT NULL,STATE_NAME TEXT DEFAULT NULL)', [])
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState1)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState2)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState3)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState4)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState5)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState6)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState7)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState8)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState9)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState10)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState11)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState12)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState13)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState14)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState15)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState16)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState17)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState18)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState19)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState20)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState21)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState22)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState23)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState24)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState25)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState26)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState27)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState28)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState29)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState30)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState31)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState32)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState33)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState34)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState35)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState36)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState37)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState38)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState39)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE (STATE_ID,STATE_CODE, STATE_NAME) VALUES (?, ?, ?)',this.masterState40)


          //this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept1)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept1)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept2)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept3)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept4)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept5)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept6)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept7)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept8)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept9)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept10)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept11)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept12)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept13)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept14)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept15)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept16)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept17)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept18)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept19)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept20)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept21)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept22)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept23)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept24)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept25)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept26)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept27)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept28)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept29)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept30)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept31)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept32)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept33)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept34)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept35)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept36)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept37)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept38)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept39)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept40)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept41)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept42)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept43)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept44)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept45)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept46)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept47)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept48)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept49)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept50)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept51)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept52)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept53)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept54)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept55)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept56)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept57)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept58)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept59)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept60)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept61)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept62)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept63)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept64)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept65)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept66)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept67)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept68)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept69)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept70)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept71)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept72)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept73)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept74)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept75)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept76)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept77)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept78)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept79)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept80)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept81)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept82)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept83)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept84)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept85)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept86)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept87)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept88)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept89)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept90)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept91)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept92)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept93)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept94)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept95)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept96)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept97)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept98)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept99)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept100)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept101)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept102)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept103)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept104)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept105)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept106)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept107)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept108)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept109)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept110)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept111)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept112)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept113)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept114)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept115)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept116)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept117)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept118)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept119)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept120)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept121)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept122)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept123)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept124)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept125)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept126)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept127)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept128)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept129)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept130)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept131)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept132)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept133)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept134)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept135)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept136)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept137)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept138)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept139)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept140)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept141)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept142)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept143)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept144)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept145)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept146)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept147)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept148)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept149)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept150)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept151)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept152)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept153)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept154)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept155)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept156)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept157)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept158)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept159)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept160)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept161)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept162)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept163)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept164)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept165)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept166)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept167)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept168)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept169)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept170)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept171)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept172)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept173)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept174)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept175)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept176)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept177)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept178)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept179)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept180)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept181)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept182)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept183)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept184)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept185)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept186)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept187)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept188)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept189)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept190)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept191)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept192)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept193)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept194)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept195)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept196)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept197)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept198)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept199)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept200)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept201)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept202)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept203)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept204)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept205)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept206)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept207)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept208)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept209)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept210)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept211)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept212)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept213)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept214)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept215)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept216)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept217)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept218)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept219)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept220)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept221)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept222)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept223)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept224)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept225)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept226)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept227)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept228)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept229)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept230)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept231)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept232)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept233)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept234)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept235)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept236)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept237)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept238)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept239)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept240)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept241)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept242)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept243)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept244)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept245)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept246)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept247)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept248)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept249)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept250)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept251)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept252)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept253)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept254)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept255)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept256)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept257)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept258)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept259)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept260)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept261)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept262)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept263)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept264)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept265)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept266)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept267)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept268)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept269)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept270)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept271)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept272)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept273)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept274)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept275)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept276)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept277)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept278)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept279)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept280)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept281)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept282)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept283)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept284)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept285)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept286)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept287)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept288)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept289)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept290)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept291)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept292)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept293)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept294)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept295)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept296)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept297)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept298)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept299)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept300)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept301)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept302)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept303)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept304)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept305)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept306)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept307)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept308)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept309)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept310)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept311)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept312)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept313)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept314)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept315)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept316)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept317)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept318)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept319)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept320)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept321)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept322)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept323)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept324)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept325)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept326)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept327)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept328)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept329)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept330)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept331)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept332)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept333)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept334)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept335)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept336)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept337)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept338)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept339)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept340)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept341)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept342)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept343)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept344)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept345)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept346)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept347)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept348)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept349)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept350)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept351)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept352)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept353)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept354)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept355)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept356)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept357)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept358)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept359)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept360)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept361)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept362)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept363)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept364)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept365)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept366)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept367)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept368)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept369)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept370)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept371)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept372)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept373)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept374)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept375)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept376)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept377)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept378)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept379)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept380)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept381)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept382)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept383)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept384)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept385)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept386)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept387)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept388)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept389)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept390)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept391)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept392)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept393)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept394)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept395)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept396)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept397)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept398)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept399)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept400)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept401)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept402)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept403)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept404)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept405)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept406)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept407)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept408)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept409)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept410)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept411)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept412)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept413)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept414)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept415)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept416)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept417)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept418)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept419)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept420)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept421)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept422)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept423)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept424)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept425)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept426)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept427)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept428)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept429)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept430)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept431)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept432)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept433)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept434)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept435)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept436)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept437)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept438)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept439)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept440)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept441)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept442)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept443)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept444)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept445)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept446)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept447)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept448)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept449)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept450)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept451)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept452)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept453)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept454)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept455)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept456)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept457)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept458)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept459)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept460)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept461)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept462)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept463)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept464)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept465)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept466)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept467)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept468)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept469)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept470)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept471)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept472)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept473)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept474)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept475)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept476)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept477)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept478)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept479)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept480)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept481)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept482)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept483)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept484)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept485)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept486)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept487)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept488)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept489)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept490)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept491)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept492)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept493)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept494)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept495)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept496)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept497)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept498)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept499)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept500)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept501)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept502)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept503)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept504)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept505)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept506)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept507)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept508)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept509)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept510)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept511)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept512)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept513)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept514)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept515)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept516)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept517)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept518)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept519)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept520)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept521)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept522)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept523)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept524)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept525)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept526)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept527)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept528)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept529)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept530)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept531)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept532)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept533)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept534)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept535)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept536)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept537)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept538)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept539)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept540)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept541)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept542)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept543)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept544)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept545)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept546)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept547)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept548)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept549)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept550)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept551)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept552)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept553)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept554)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept555)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept556)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept557)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept558)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept559)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept560)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept561)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept562)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept563)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept564)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept565)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept566)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept567)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept568)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept569)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept570)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept571)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept572)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept573)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept574)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept575)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept576)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept577)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept578)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept579)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept580)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept581)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept582)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept583)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept584)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept585)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept586)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept587)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept588)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept589)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept590)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept591)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept592)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept593)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept594)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept595)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept596)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept597)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept598)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept599)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept600)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept601)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept602)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept603)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept604)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept605)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept606)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept607)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept608)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept609)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept610)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept611)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept612)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept613)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept614)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept615)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept616)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept617)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept618)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept619)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept620)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept621)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept622)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept623)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept624)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept625)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept626)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept627)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept628)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept629)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept630)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept631)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept632)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept633)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept634)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept635)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept636)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept637)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept638)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept639)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept640)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept641)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept642)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept643)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept644)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept645)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept646)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept647)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept648)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept649)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept650)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept651)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept652)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept653)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept654)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept655)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept656)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_STATE_DEPERTMENT (SD_STATE_ID,STATE_ID,SD_STATE_CODE,SD_DEPT_CODE,SD_DEPT_NAME) VALUES (?, ?, ?, ?, ?)',this.masterImplementingDept657)


          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector1)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector2)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector3)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector4)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector5)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector6)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector7)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector8)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector9)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector10)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector11)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector12)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector13)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector14)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector15)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector16)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector17)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector18)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector19)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector20)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector21)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector22)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector23)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector24)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector25)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector26)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector27)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector28)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector29)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector30)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector31)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector32)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector33)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector34)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector35)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector36)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector37)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector38)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector39)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector40)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector41)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector42)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector43)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector44)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector45)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector46)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector47)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector48)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_SUBSECTOR (SS_ID,SS_SUB_SECTOR_CODE, SS_SUB_SECTOR_DESCN) VALUES (?, ?, ?)',this.masterSubSector49)


          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose1)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose2)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose3)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose4)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose5)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose6)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose7)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose8)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose9)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose10)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose11)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose12)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose13)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose14)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose15)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose16)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose17)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose18)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose19)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose20)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose21)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose22)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose23)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose24)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose25)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose26)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose27)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose28)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose29)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose30)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose31)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose32)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose33)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose34)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose35)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose36)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose37)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose38)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose39)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose40)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PURPOSE (PP_PGM_PURP_ID,PP_PGM_SUB_SECTOR, PP_PGM_PURP_CODE_ACTUAL,PP_PGM_PURP_CODE,PP_PGM_PURP_DESCN) VALUES (?, ?, ?, ?, ?)',this.masterPurpose41)
          
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity1)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity2)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity3)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity4)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity5)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity6)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity7)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity8)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity9)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity10)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity11)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity12)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity13)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity14)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity15)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity16)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity17)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity18)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity19)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity20)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity21)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity22)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity23)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity24)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity25)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity26)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity27)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity28)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity29)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity30)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity31)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity32)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity33)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity34)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity35)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity36)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity37)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity38)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity39)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity40)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity41)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity42)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity43)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity44)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity45)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity46)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity47)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity48)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity49)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity50)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity51)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity52)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity53)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity54)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity55)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity56)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity57)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity58)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity59)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity60)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity61)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity62)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity63)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity64)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity65)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity66)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity67)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_ACTIVITY (PA_PGM_ACT_ID,PA_PGM_SUB_SECTOR, PA_PGM_PURP_CODE_ACTUAL,PA_PGM_ACT_CODE,PA_PGM_ACT_DESC,PA_PGM_PURP_CODE) VALUES (?, ?, ?, ?, ?, ?)',this.masterActivity68)

          this.database.executeSql('INSERT or IGNORE INTO MASTER_TRANCHE (TR_TRANCE_CODE, TR_TRANCE_NAME,TR_FIN_YEAR,TR_BEG_DATE,TR_SANC_END_DATE,TR_CLOSURE_DATE) VALUES (?, ?, ?, ?, ?, ?)',this.masterTrancheRow1)
           this.database.executeSql('INSERT or IGNORE INTO MASTER_TRANCHE (TR_TRANCE_CODE, TR_TRANCE_NAME,TR_FIN_YEAR,TR_BEG_DATE,TR_SANC_END_DATE,TR_CLOSURE_DATE) VALUES (?, ?, ?, ?, ?, ?)',this.masterTrancheRow2)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_TRANCHE (TR_TRANCE_CODE, TR_TRANCE_NAME,TR_FIN_YEAR,TR_BEG_DATE,TR_SANC_END_DATE,TR_CLOSURE_DATE) VALUES (?, ?, ?, ?, ?, ?)',this.masterTrancheRow3)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_TRANCHE (TR_TRANCE_CODE, TR_TRANCE_NAME,TR_FIN_YEAR,TR_BEG_DATE,TR_SANC_END_DATE,TR_CLOSURE_DATE) VALUES (?, ?, ?, ?, ?, ?)',this.masterTrancheRow4)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_TRANCHE (TR_TRANCE_CODE, TR_TRANCE_NAME,TR_FIN_YEAR,TR_BEG_DATE,TR_SANC_END_DATE,TR_CLOSURE_DATE) VALUES (?, ?, ?, ?, ?, ?)',this.masterTrancheRow5)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_TRANCHE (TR_TRANCE_CODE, TR_TRANCE_NAME,TR_FIN_YEAR,TR_BEG_DATE,TR_SANC_END_DATE,TR_CLOSURE_DATE) VALUES (?, ?, ?, ?, ?, ?)',this.masterTrancheRow6)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_TRANCHE (TR_TRANCE_CODE, TR_TRANCE_NAME,TR_FIN_YEAR,TR_BEG_DATE,TR_SANC_END_DATE,TR_CLOSURE_DATE) VALUES (?, ?, ?, ?, ?, ?)',this.masterTrancheRow7)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_TRANCHE (TR_TRANCE_CODE, TR_TRANCE_NAME,TR_FIN_YEAR,TR_BEG_DATE,TR_SANC_END_DATE,TR_CLOSURE_DATE) VALUES (?, ?, ?, ?, ?, ?)',this.masterTrancheRow8)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_TRANCHE (TR_TRANCE_CODE, TR_TRANCE_NAME,TR_FIN_YEAR,TR_BEG_DATE,TR_SANC_END_DATE,TR_CLOSURE_DATE) VALUES (?, ?, ?, ?, ?, ?)',this.masterTrancheRow9)
          
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PROJECT(NP_PROJ_ID,NP_PROJ_CODE, NP_PROJ_DESCN,NP_TRANCHE_CODE ,NP_ACNTNG_LOC_CODE ,NP_ACNTNG_STATE_CODE ,NP_ACNTNG_DIST_CODE,NP_ACNTNG_BLOCK_CODE,NP_ACNTNG_VILLAGE_CODE,NRP_PURP_CODE,NRP_PROJ_ACT_CODE ,NRP_PROJ_SUB_ACT_CODE,NRP_REMARKS,NRP_PLANNED_START_DATE,NRP_PLANNED_END_DATE,NRP_PROJ_IMPL_STATE_DEPT ,NRP_UPDATED_TOTAL_COST,NRP_EXP_INCURRED_CUTOFF_DATE,NRP_EXP_INCURRED_AMT,NRP_INELIGIBLE_COST,NRP_CONT_BY_OTH_AGENCIES,NRP_BAL_ELIGILBE_COST,NRP_ELIG_LOAN_AMT_ASPER_PM,NRP_STATE_GOVT_SHARE_ACTUAL,NRP_ELIG_LOAN_AMT_ACTUAL,NRP_COST_OF_DEVLPMNT,NRP_ERR_PER,NRP_BCR,NRP_SANC_LOAN_AMT,NRP_SANC_GRNT_AMT,NRP_PROPOSAL_NUMBER) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',this.masterProject1)
          this.database.executeSql('INSERT or IGNORE INTO MASTER_PROJECT(NP_PROJ_ID,NP_PROJ_CODE, NP_PROJ_DESCN,NP_TRANCHE_CODE ,NP_ACNTNG_LOC_CODE ,NP_ACNTNG_STATE_CODE ,NP_ACNTNG_DIST_CODE,NP_ACNTNG_BLOCK_CODE,NP_ACNTNG_VILLAGE_CODE,NRP_PURP_CODE,NRP_PROJ_ACT_CODE ,NRP_PROJ_SUB_ACT_CODE,NRP_REMARKS,NRP_PLANNED_START_DATE,NRP_PLANNED_END_DATE,NRP_PROJ_IMPL_STATE_DEPT ,NRP_UPDATED_TOTAL_COST,NRP_EXP_INCURRED_CUTOFF_DATE,NRP_EXP_INCURRED_AMT,NRP_INELIGIBLE_COST,NRP_CONT_BY_OTH_AGENCIES,NRP_BAL_ELIGILBE_COST,NRP_ELIG_LOAN_AMT_ASPER_PM,NRP_STATE_GOVT_SHARE_ACTUAL,NRP_ELIG_LOAN_AMT_ACTUAL,NRP_COST_OF_DEVLPMNT,NRP_ERR_PER,NRP_BCR,NRP_SANC_LOAN_AMT,NRP_SANC_GRNT_AMT,NRP_PROPOSAL_NUMBER) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',this.masterProject2)



          .then(() => console.log('Executed SQL' + this.database))
          .catch(e => console.log(e));
      });
    });
  }


  //UserMaster Entry
  addMasterUser(UserId, UserName,Password,RoleId,OnlinePasswordFailureAttempt,OfflinePasswordFailureAttempt,Salt) {
    let data = [UserId, UserName,Password,RoleId,OnlinePasswordFailureAttempt,OfflinePasswordFailureAttempt,Salt];
    return this.database.executeSql('INSERT INTO USER_MASTER (UserId, UserName,Password,RoleId,OnlinePasswordFailureAttempt,OfflinePasswordFailureAttempt,Salt) VALUES (?, ?, ?, ?, ?, ?, ?)', data).then(data => {
        console.log("UserInserted Successfully" + data);
    });
  }

  deleteMasterUser(){
    return this.database.executeSql('DELETE FROM USER_MASTER',[]).then(data => {
        console.log("Data Deleted Successfully" + data);
  });
  }



  //UpdateOnline PasswordFailureAttemptCount:on Wrong user name and password
    updateOnlinePasswordFailureAttemptCount(OnlinePasswordfailureAttempt:any){
    let data = [OnlinePasswordfailureAttempt];
      return this.database.executeSql(`UPDATE USER_MASTER SET OnlinePasswordFailureAttempt = ?`, data).then(response => {
        return response.rowsAffected;
      })
  }

  updateOfflinePasswordFailureAttemptCount(OfflinePasswordfailureAttempt:any){
    let data = [OfflinePasswordfailureAttempt];
      return this.database.executeSql(`UPDATE USER_MASTER SET OfflinePasswordFailureAttempt = ?`, data).then(response => {
        console.log("response.rowsAffected" + response.rowsAffected);
        return response.rowsAffected;
      })
  }

  //Get Number of Rows in User Master Table
  getMasterUserCount(){
    let count=0;
    return this.database.executeSql('SELECT COUNT(UserId) FROM USER_MASTER', []).then(data => {
      count=data.rows.length;
      return count; 
    });
  }

  getMasterUserSalt(){
    let salt:'';
    return this.database.executeSql('SELECT Salt FROM USER_MASTER', []).then(data => {
      console.log("In Getting salt");
      console.log(data);
      console.log(data.salt);
      return data.salt;
      //return count; 
    });
  }

  getUserDetails():any {
    return this.database.executeSql('SELECT * FROM USER_MASTER', []).then(data => {
      let userDetails: IUserMaster[] = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          userDetails.push({ 
            count:data.rows.length,
            UserId: data.rows.item(i).UserId, 
            UserName: data.rows.item(i).UserName, 
            Password: data.rows.item(i).Password, 
            RoleId: data.rows.item(i).RoleId, 
            OnlinePasswordFailureAttempt: data.rows.item(i).OnlinePasswordFailureAttempt, 
            OfflinePasswordFailureAttempt: data.rows.item(i).OfflinePasswordFailureAttempt,
            Salt: data.rows.item(i).Salt
           });
        }
      }
      this.userDetails.next(userDetails);
      return userDetails;
    });
  }

  getMasterTrancheDetails():any{
    return this.database.executeSql('SELECT * FROM MASTER_TRANCHE', []).then(data => {
      let trancheMasterDetails: IMasterTranche[] = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          trancheMasterDetails.push({ 
            count:data.rows.length,
            TR_TRANCE_CODE: data.rows.item(i).TR_TRANCE_CODE, 
            TR_TRANCE_NAME: data.rows.item(i).TR_TRANCE_NAME, 
            TR_FIN_YEAR: data.rows.item(i).TR_FIN_YEAR,
            TR_BEG_DATE: data.rows.item(i).TR_BEG_DATE,
            TR_SANC_END_DATE: data.rows.item(i).TR_SANC_END_DATE,
            TR_CLOSURE_DATE: data.rows.item(i).TR_CLOSURE_DATE,
           });
        }
      }
      this.trancheMasterDetails.next(trancheMasterDetails);
      return trancheMasterDetails;
    });

  }

  getMasterStateDetails():any{
    return this.database.executeSql('SELECT * FROM MASTER_STATE', []).then(data => {
      let masterStateDetails: IMasterState[] = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          masterStateDetails.push({ 
            count:data.rows.length,
            STATE_ID:data.rows.item(i).STATE_ID,
            STATE_CODE: data.rows.item(i).STATE_CODE, 
            STATE_NAME: data.rows.item(i).STATE_NAME, 
           });
        }
      }
      this.masterStateDetails.next(masterStateDetails);
      return masterStateDetails;
    });

  }

  getMasterSubSectorDetails():any{
    return this.database.executeSql('SELECT * FROM MASTER_SUBSECTOR', []).then(data => {
      let masterSubSectorDetails: IMasterSubSector[] = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          masterSubSectorDetails.push({ 
            count:data.rows.length,
            SS_ID:data.rows.item(i).SS_ID,
            SS_SUB_SECTOR_CODE: data.rows.item(i).SS_SUB_SECTOR_CODE, 
            SS_SUB_SECTOR_DESCN: data.rows.item(i).SS_SUB_SECTOR_DESCN, 
           });
        }
      }
      this.masterSubSectorDetails.next(masterSubSectorDetails);
      return masterSubSectorDetails;
    });
  }


  getMasterPurposeDetails(SS_ID):any{
    
    return this.database.executeSql('SELECT * FROM MASTER_PURPOSE WHERE PP_PGM_SUB_SECTOR = ?', [SS_ID]).then(data => {
      let masterPurposeDetails: IMasterPurpose[] = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          masterPurposeDetails.push({ 
            count:data.rows.length,
            PP_PGM_PURP_ID:data.rows.item(i).PP_PGM_PURP_ID,
            PP_PGM_SUB_SECTOR: data.rows.item(i).PP_PGM_SUB_SECTOR, 
            PP_PGM_PURP_CODE_ACTUAL: data.rows.item(i).PP_PGM_PURP_CODE_ACTUAL, 
            PP_PGM_PURP_CODE: data.rows.item(i).PP_PGM_PURP_CODE, 
            PP_PGM_PURP_DESCN: data.rows.item(i).PP_PGM_PURP_DESCN, 
           });
        }
      }
      this.masterPurposeDetails.next(masterPurposeDetails);
      return masterPurposeDetails;
    });
  }

  getMasterActivity(PP_PGM_PURP_ID):any{
    return this.database.executeSql('SELECT * FROM MASTER_ACTIVITY WHERE PA_PGM_PURP_CODE = ?', [PP_PGM_PURP_ID]).then(data => {
      let masterActivityDetails: IMasterActivity[] = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          masterActivityDetails.push({ 
            count:data.rows.length,
            PA_PGM_ACT_ID:data.rows.item(i).PA_PGM_ACT_ID,
            PA_PGM_SUB_SECTOR: data.rows.item(i).PA_PGM_SUB_SECTOR, 
            PA_PGM_PURP_CODE_ACTUAL: data.rows.item(i).PA_PGM_PURP_CODE_ACTUAL, 
            PA_PGM_ACT_CODE: data.rows.item(i).PA_PGM_ACT_CODE,
            PA_PGM_ACT_DESC: data.rows.item(i).PA_PGM_ACT_DESC,
            PA_PGM_PURP_CODE: data.rows.item(i).PA_PGM_PURP_CODE
           });
        }
      }
      this.masterActivityDetails.next(masterActivityDetails);
      return masterActivityDetails;
    });

  }




  getMasterStateImplementingDepartment(STATE_ID):any{

    return this.database.executeSql('SELECT * FROM MASTER_STATE_DEPERTMENT WHERE STATE_ID = ?', [STATE_ID]).then(data => {
      let masterImplementingDepartmentDetails: IMasterStateImplementingDepartment[] = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          masterImplementingDepartmentDetails.push({ 
            count:data.rows.length,
            SD_STATE_ID:data.rows.item(i).SD_STATE_ID,
            SD_STATE_CODE: data.rows.item(i).SD_STATE_CODE, 
            SD_DEPT_CODE: data.rows.item(i).SD_DEPT_CODE, 
            SD_DEPT_NAME: data.rows.item(i).SD_DEPT_NAME
            
           });
        }
      }
      this.masterImplementingDepartmentDetails.next(masterImplementingDepartmentDetails);
      return masterImplementingDepartmentDetails;
    });
  }
      getProjectDetailsByProjectCode(ProjectCode):any{
    return this.database.executeSql('SELECT * FROM MASTER_PROJECT WHERE NP_PROJ_CODE = ?', [ProjectCode]).then(data => {
      let masterProjectDetails: IMasterProject[] = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          masterProjectDetails.push({ 
            count:data.rows.length,
            NP_PROJ_ID:data.rows.item(i).NP_PROJ_ID,
            NP_PROJ_CODE: data.rows.item(i).NP_PROJ_CODE, 
            NP_PROJ_DESCN: data.rows.item(i).NP_PROJ_DESCN, 
            NP_TRANCHE_CODE: data.rows.item(i).NP_TRANCHE_CODE,

            NP_ACNTNG_LOC_CODE: data.rows.item(i).NP_ACNTNG_LOC_CODE,
            NP_ACNTNG_STATE_CODE: data.rows.item(i).NP_ACNTNG_STATE_CODE,

            NP_ACNTNG_DIST_CODE: data.rows.item(i).NP_ACNTNG_DIST_CODE,
            NP_ACNTNG_BLOCK_CODE: data.rows.item(i).NP_ACNTNG_BLOCK_CODE,
            NP_ACNTNG_VILLAGE_CODE: data.rows.item(i).NP_ACNTNG_VILLAGE_CODE,
            NRP_PURP_CODE: data.rows.item(i).NRP_PURP_CODE,
            NRP_PROJ_ACT_CODE: data.rows.item(i).NRP_PROJ_ACT_CODE,

            NRP_PROJ_SUB_ACT_CODE: data.rows.item(i).NRP_PROJ_SUB_ACT_CODE,
            NRP_REMARKS: data.rows.item(i).NRP_REMARKS,
            NRP_PLANNED_START_DATE: data.rows.item(i).NRP_PLANNED_START_DATE,
            NRP_PLANNED_END_DATE: data.rows.item(i).NRP_PLANNED_END_DATE,
            NRP_PROJ_IMPL_STATE_DEPT: data.rows.item(i).NRP_PROJ_IMPL_STATE_DEPT,
            NRP_UPDATED_TOTAL_COST: data.rows.item(i).NRP_UPDATED_TOTAL_COST,
            NRP_EXP_INCURRED_CUTOFF_DATE: data.rows.item(i).NRP_EXP_INCURRED_CUTOFF_DATE,


            NRP_EXP_INCURRED_AMT: data.rows.item(i).NRP_EXP_INCURRED_AMT,
            NRP_INELIGIBLE_COST: data.rows.item(i).NRP_INELIGIBLE_COST,
            NRP_CONT_BY_OTH_AGENCIES: data.rows.item(i).NRP_CONT_BY_OTH_AGENCIES,
            NRP_BAL_ELIGILBE_COST: data.rows.item(i).NRP_BAL_ELIGILBE_COST,
            NRP_ELIG_LOAN_AMT_ASPER_PM: data.rows.item(i).NRP_ELIG_LOAN_AMT_ASPER_PM,
            NRP_STATE_GOVT_SHARE_ACTUAL: data.rows.item(i).NRP_STATE_GOVT_SHARE_ACTUAL,
            NRP_ELIG_LOAN_AMT_ACTUAL: data.rows.item(i).NRP_ELIG_LOAN_AMT_ACTUAL,
            
            NRP_COST_OF_DEVLPMNT: data.rows.item(i).NRP_COST_OF_DEVLPMNT,
            NRP_ERR_PER: data.rows.item(i).NRP_ERR_PER,
            NRP_BCR: data.rows.item(i).NRP_BCR,
            NRP_SANC_LOAN_AMT: data.rows.item(i).NRP_SANC_LOAN_AMT,
            NRP_SANC_GRNT_AMT: data.rows.item(i).NRP_SANC_GRNT_AMT,
            NRP_PROPOSAL_NUMBER: data.rows.item(i).NRP_PROPOSAL_NUMBER,
                        
           });
        }
      }
      this.masterProjectDetails.next(masterProjectDetails);
      return masterProjectDetails;
    });

  }


  getMasterProjects():any{
    return this.database.executeSql('SELECT * FROM MASTER_PROJECT', []).then(data => {
      let masterProjectDetails: IMasterProject[] = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          masterProjectDetails.push({ 
            count:data.rows.length,
            NP_PROJ_ID:data.rows.item(i).NP_PROJ_ID,
            NP_PROJ_CODE: data.rows.item(i).NP_PROJ_CODE, 
            NP_PROJ_DESCN: data.rows.item(i).NP_PROJ_DESCN, 
            NP_TRANCHE_CODE: data.rows.item(i).NP_TRANCHE_CODE,

            NP_ACNTNG_LOC_CODE: data.rows.item(i).NP_ACNTNG_LOC_CODE,
            NP_ACNTNG_STATE_CODE: data.rows.item(i).NP_ACNTNG_STATE_CODE,

            NP_ACNTNG_DIST_CODE: data.rows.item(i).NP_ACNTNG_DIST_CODE,
            NP_ACNTNG_BLOCK_CODE: data.rows.item(i).NP_ACNTNG_BLOCK_CODE,
            NP_ACNTNG_VILLAGE_CODE: data.rows.item(i).NP_ACNTNG_VILLAGE_CODE,
            NRP_PURP_CODE: data.rows.item(i).NRP_PURP_CODE,
            NRP_PROJ_ACT_CODE: data.rows.item(i).NRP_PROJ_ACT_CODE,

            NRP_PROJ_SUB_ACT_CODE: data.rows.item(i).NRP_PROJ_SUB_ACT_CODE,
            NRP_REMARKS: data.rows.item(i).NRP_REMARKS,
            NRP_PLANNED_START_DATE: data.rows.item(i).NRP_PLANNED_START_DATE,
            NRP_PLANNED_END_DATE: data.rows.item(i).NRP_PLANNED_END_DATE,
            NRP_PROJ_IMPL_STATE_DEPT: data.rows.item(i).NRP_PROJ_IMPL_STATE_DEPT,
            NRP_UPDATED_TOTAL_COST: data.rows.item(i).NRP_UPDATED_TOTAL_COST,
            NRP_EXP_INCURRED_CUTOFF_DATE: data.rows.item(i).NRP_EXP_INCURRED_CUTOFF_DATE,


            NRP_EXP_INCURRED_AMT: data.rows.item(i).NRP_EXP_INCURRED_AMT,
            NRP_INELIGIBLE_COST: data.rows.item(i).NRP_INELIGIBLE_COST,
            NRP_CONT_BY_OTH_AGENCIES: data.rows.item(i).NRP_CONT_BY_OTH_AGENCIES,
            NRP_BAL_ELIGILBE_COST: data.rows.item(i).NRP_BAL_ELIGILBE_COST,
            NRP_ELIG_LOAN_AMT_ASPER_PM: data.rows.item(i).NRP_ELIG_LOAN_AMT_ASPER_PM,
            NRP_STATE_GOVT_SHARE_ACTUAL: data.rows.item(i).NRP_STATE_GOVT_SHARE_ACTUAL,
            NRP_ELIG_LOAN_AMT_ACTUAL: data.rows.item(i).NRP_ELIG_LOAN_AMT_ACTUAL,
            
            NRP_COST_OF_DEVLPMNT: data.rows.item(i).NRP_COST_OF_DEVLPMNT,
            NRP_ERR_PER: data.rows.item(i).NRP_ERR_PER,
            NRP_BCR: data.rows.item(i).NRP_BCR,
            NRP_SANC_LOAN_AMT: data.rows.item(i).NRP_SANC_LOAN_AMT,
            NRP_SANC_GRNT_AMT: data.rows.item(i).NRP_SANC_GRNT_AMT,
            NRP_PROPOSAL_NUMBER: data.rows.item(i).NRP_PROPOSAL_NUMBER,
                        
           });
        }
      }
      this.masterProjectDetails.next(masterProjectDetails);
      return masterProjectDetails;
    });

  }

  addMasterProjects(downloadResponse:DownloadProjectResponseModule)
  {
    let data = [downloadResponse.NP_PROJ_CODE,
      downloadResponse.NP_PROJ_DESCN,

      downloadResponse.NP_PROJ_DESCN,
      downloadResponse.NP_TRANCHE_CODE,
      downloadResponse.NP_ACNTNG_LOC_CODE,
      downloadResponse.NP_ACNTNG_STATE_CODE,
      downloadResponse.NP_ACNTNG_DIST_CODE,
      downloadResponse.NP_ACNTNG_BLOCK_CODE,
      downloadResponse.NP_ACNTNG_VILLAGE_CODE,

      downloadResponse.NRP_PURP_CODE,
      downloadResponse.NRP_PROJ_ACT_CODE,
      downloadResponse.NRP_PROJ_SUB_ACT_CODE,
      downloadResponse.NRP_REMARKS,
      downloadResponse.NRP_PLANNED_START_DATE,
      downloadResponse.NRP_PLANNED_END_DATE,
      downloadResponse.NRP_PROJ_IMPL_STATE_DEPT,


      downloadResponse.NRP_UPDATED_TOTAL_COST,
      downloadResponse.NRP_EXP_INCURRED_CUTOFF_DATE,
      downloadResponse.NRP_EXP_INCURRED_AMT,
      downloadResponse.NRP_INELIGIBLE_COST,
      downloadResponse.NRP_CONT_BY_OTH_AGENCIES,

      downloadResponse.NRP_PLANNED_END_DATE,
      downloadResponse.NRP_PROJ_IMPL_STATE_DEPT,
    
    ];
      return this.database.executeSql('INSERT INTO tbldeveloper (name, skills, img) VALUES (?, ?, ?)', data).then(data => {

         // this.loadDevelopers();
      });

  }











}
