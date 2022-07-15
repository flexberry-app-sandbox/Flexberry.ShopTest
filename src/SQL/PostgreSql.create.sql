﻿




CREATE TABLE StoreHouse (
 primaryKey UUID NOT NULL,
 Number INT NOT NULL,
 Address VARCHAR(255) NULL,
 Storekeeper UUID NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE StoreProduct (
 primaryKey UUID NOT NULL,
 Amount INT NULL,
 Product UUID NULL,
 StoreHouse UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE InvoiceItem (
 primaryKey UUID NOT NULL,
 Amount INT NULL,
 Weight DOUBLE PRECISION NULL,
 Price DOUBLE PRECISION NULL,
 TotalSum DOUBLE PRECISION NULL,
 Product UUID NULL,
 Invoice UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE "Order" (
 primaryKey UUID NOT NULL,
 Status VARCHAR(10) NULL,
 ShipmentDate TIMESTAMP(3) NULL,
 PaymentDate TIMESTAMP(3) NULL,
 TotalSum DOUBLE PRECISION NULL,
 Number INT NOT NULL,
 CreateDate TIMESTAMP(3) NULL,
 Manager UUID NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Document (
 primaryKey UUID NOT NULL,
 Number INT NOT NULL,
 CreateDate TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Employee (
 primaryKey UUID NOT NULL,
 Number INT NOT NULL,
 LastName VARCHAR(255) NULL,
 FirstName VARCHAR(255) NULL,
 MiddleName VARCHAR(255) NULL,
 PhoneNumber VARCHAR(255) NULL,
 EMail VARCHAR(255) NULL,
 Position VARCHAR(11) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Product (
 primaryKey UUID NOT NULL,
 ProductCode INT NOT NULL,
 Name VARCHAR(255) NULL,
 Measure VARCHAR(255) NULL,
 Description VARCHAR(255) NULL,
 Price DOUBLE PRECISION NULL,
 Weight DOUBLE PRECISION NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE OrderItem (
 primaryKey UUID NOT NULL,
 Amount INT NULL,
 PriceWTaxes DOUBLE PRECISION NULL,
 TotalSum DOUBLE PRECISION NULL,
 Product UUID NULL,
 "Order" UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Invoice (
 primaryKey UUID NOT NULL,
 Status VARCHAR(7) NULL,
 ShipmentDateTime TIMESTAMP(3) NULL,
 TotalSum DOUBLE PRECISION NULL,
 TotalWeight DOUBLE PRECISION NULL,
 Note VARCHAR(255) NULL,
 CustomerName VARCHAR(255) NULL,
 Number INT NOT NULL,
 CreateDate TIMESTAMP(3) NULL,
 "Order" UUID NULL,
 ResponsiblePerson UUID NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE StoreHouse ADD CONSTRAINT FK1a03c63a42cf7ff6747b1aef1e8846f9087bf73c FOREIGN KEY (Storekeeper) REFERENCES Employee; 
CREATE INDEX Index1a03c63a42cf7ff6747b1aef1e8846f9087bf73c on StoreHouse (Storekeeper); 

 ALTER TABLE StoreProduct ADD CONSTRAINT FKb5c817c6a852e34b415800cb1f3671db836ee530 FOREIGN KEY (Product) REFERENCES Product; 
CREATE INDEX Indexb5c817c6a852e34b415800cb1f3671db836ee530 on StoreProduct (Product); 

 ALTER TABLE StoreProduct ADD CONSTRAINT FK62636fd91851b3bac5f03daab01f7c0600ffb31c FOREIGN KEY (StoreHouse) REFERENCES StoreHouse; 
CREATE INDEX Index62636fd91851b3bac5f03daab01f7c0600ffb31c on StoreProduct (StoreHouse); 

 ALTER TABLE InvoiceItem ADD CONSTRAINT FKe49dd3879fa03ca14bb5d5f734b7e5f886b1946e FOREIGN KEY (Product) REFERENCES Product; 
CREATE INDEX Indexe49dd3879fa03ca14bb5d5f734b7e5f886b1946e on InvoiceItem (Product); 

 ALTER TABLE InvoiceItem ADD CONSTRAINT FKda8e802888b8ac0798b4b6971cf7fb099921cc4a FOREIGN KEY (Invoice) REFERENCES Invoice; 
CREATE INDEX Indexda8e802888b8ac0798b4b6971cf7fb099921cc4a on InvoiceItem (Invoice); 

 ALTER TABLE "Order" ADD CONSTRAINT FK84e406358bd1f0a5cb12051beb83bc57d2ec2a19 FOREIGN KEY (Manager) REFERENCES Employee; 
CREATE INDEX Index84e406358bd1f0a5cb12051beb83bc57d2ec2a19 on "Order" (Manager); 

 ALTER TABLE OrderItem ADD CONSTRAINT FKe13517b42c04cf39a8c0bae0acbadef0093eda18 FOREIGN KEY (Product) REFERENCES Product; 
CREATE INDEX Indexe13517b42c04cf39a8c0bae0acbadef0093eda18 on OrderItem (Product); 

 ALTER TABLE OrderItem ADD CONSTRAINT FK0a1b281091656b4109f1f642aa2c89896f09de36 FOREIGN KEY ("Order") REFERENCES "Order"; 
CREATE INDEX Index14c0e8b2d131caa29482e11055633449525f5514 on OrderItem ("Order"); 

 ALTER TABLE Invoice ADD CONSTRAINT FKfa67382aa637ab5e753cd4d201e2c2bae453b4df FOREIGN KEY ("Order") REFERENCES "Order"; 
CREATE INDEX Index5634331ef2a70c7d362e8480a270a2a2baba6ee2 on Invoice ("Order"); 

 ALTER TABLE Invoice ADD CONSTRAINT FK978ca0ba8dc59b68af9f965bebf309d60d1e8bfb FOREIGN KEY (ResponsiblePerson) REFERENCES Employee; 
CREATE INDEX Index978ca0ba8dc59b68af9f965bebf309d60d1e8bfb on Invoice (ResponsiblePerson); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 
