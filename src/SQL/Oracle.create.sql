



CREATE TABLE "StoreHouse"
(

	"primaryKey" RAW(16) NOT NULL,

	"Number" NUMBER(10) NOT NULL,

	"Address" NVARCHAR2(255) NULL,

	"Storekeeper" RAW(16) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "StoreProduct"
(

	"primaryKey" RAW(16) NOT NULL,

	"Amount" NUMBER(10) NULL,

	"Product" RAW(16) NULL,

	"StoreHouse" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "InvoiceItem"
(

	"primaryKey" RAW(16) NOT NULL,

	"Amount" NUMBER(10) NULL,

	"Weight" FLOAT(126) NULL,

	"Price" FLOAT(126) NULL,

	"TotalSum" FLOAT(126) NULL,

	"Product" RAW(16) NULL,

	"Invoice" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Order"
(

	"primaryKey" RAW(16) NOT NULL,

	"Status" NVARCHAR2(10) NULL,

	"ShipmentDate" DATE NULL,

	"PaymentDate" DATE NULL,

	"TotalSum" FLOAT(126) NULL,

	"Number" NUMBER(10) NOT NULL,

	"CreateDate" DATE NULL,

	"Manager" RAW(16) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Document"
(

	"primaryKey" RAW(16) NOT NULL,

	"Number" NUMBER(10) NOT NULL,

	"CreateDate" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Employee"
(

	"primaryKey" RAW(16) NOT NULL,

	"Number" NUMBER(10) NOT NULL,

	"LastName" NVARCHAR2(255) NULL,

	"FirstName" NVARCHAR2(255) NULL,

	"MiddleName" NVARCHAR2(255) NULL,

	"PhoneNumber" NVARCHAR2(255) NULL,

	"EMail" NVARCHAR2(255) NULL,

	"Position" NVARCHAR2(11) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Product"
(

	"primaryKey" RAW(16) NOT NULL,

	"ProductCode" NUMBER(10) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	"Measure" NVARCHAR2(255) NULL,

	"Description" NVARCHAR2(255) NULL,

	"Price" FLOAT(126) NULL,

	"Weight" FLOAT(126) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "OrderItem"
(

	"primaryKey" RAW(16) NOT NULL,

	"Amount" NUMBER(10) NULL,

	"PriceWTaxes" FLOAT(126) NULL,

	"TotalSum" FLOAT(126) NULL,

	"Product" RAW(16) NULL,

	"Order" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Invoice"
(

	"primaryKey" RAW(16) NOT NULL,

	"Status" NVARCHAR2(7) NULL,

	"ShipmentDateTime" DATE NULL,

	"TotalSum" FLOAT(126) NULL,

	"TotalWeight" FLOAT(126) NULL,

	"Note" NVARCHAR2(255) NULL,

	"CustomerName" NVARCHAR2(255) NULL,

	"Number" NUMBER(10) NOT NULL,

	"CreateDate" DATE NULL,

	"Order" RAW(16) NULL,

	"ResponsiblePerson" RAW(16) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "StoreHouse"
	ADD CONSTRAINT "StoreHouse_FEmployee_0" FOREIGN KEY ("Storekeeper") REFERENCES "Employee" ("primaryKey");

CREATE INDEX "StoreHouse_IStorekeeper" on "StoreHouse" ("Storekeeper");

ALTER TABLE "StoreProduct"
	ADD CONSTRAINT "StoreProduct_FProduct_0" FOREIGN KEY ("Product") REFERENCES "Product" ("primaryKey");

CREATE INDEX "StoreProduct_IProduct" on "StoreProduct" ("Product");

ALTER TABLE "StoreProduct"
	ADD CONSTRAINT "StoreProduct_FStoreHouse_0" FOREIGN KEY ("StoreHouse") REFERENCES "StoreHouse" ("primaryKey");

CREATE INDEX "StoreProduct_IStoreHouse" on "StoreProduct" ("StoreHouse");

ALTER TABLE "InvoiceItem"
	ADD CONSTRAINT "InvoiceItem_FProduct_0" FOREIGN KEY ("Product") REFERENCES "Product" ("primaryKey");

CREATE INDEX "InvoiceItem_IProduct" on "InvoiceItem" ("Product");

ALTER TABLE "InvoiceItem"
	ADD CONSTRAINT "InvoiceItem_FInvoice_0" FOREIGN KEY ("Invoice") REFERENCES "Invoice" ("primaryKey");

CREATE INDEX "InvoiceItem_IInvoice" on "InvoiceItem" ("Invoice");

ALTER TABLE "Order"
	ADD CONSTRAINT "Order_FEmployee_0" FOREIGN KEY ("Manager") REFERENCES "Employee" ("primaryKey");

CREATE INDEX "Order_IManager" on "Order" ("Manager");

ALTER TABLE "OrderItem"
	ADD CONSTRAINT "OrderItem_FProduct_0" FOREIGN KEY ("Product") REFERENCES "Product" ("primaryKey");

CREATE INDEX "OrderItem_IProduct" on "OrderItem" ("Product");

ALTER TABLE "OrderItem"
	ADD CONSTRAINT "OrderItem_FOrder_0" FOREIGN KEY ("Order") REFERENCES "Order" ("primaryKey");

CREATE INDEX "OrderItem_IOrder" on "OrderItem" ("Order");

ALTER TABLE "Invoice"
	ADD CONSTRAINT "Invoice_FOrder_0" FOREIGN KEY ("Order") REFERENCES "Order" ("primaryKey");

CREATE INDEX "Invoice_IOrder" on "Invoice" ("Order");

ALTER TABLE "Invoice"
	ADD CONSTRAINT "Invoice_FEmployee_0" FOREIGN KEY ("ResponsiblePerson") REFERENCES "Employee" ("primaryKey");

CREATE INDEX "Invoice_IResponsiblePerson" on "Invoice" ("ResponsiblePerson");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


