CREATE DATABASE BinBuddy;
USE BinBuddy;

CREATE TABLE Material (
	materialID INT AUTO_INCREMENT PRIMARY KEY,
    materialName varchar(60),
    disposalMethod varchar(60)
);

CREATE TABLE SpecificItem (
	itemID INT AUTO_INCREMENT PRIMARY KEY,
    itemName varchar(60),
    materialID INT,
    disposalMethod varchar(60),
    FOREIGN KEY (materialID) REFERENCES Material(materialID)
);


INSERT INTO material (materialName, disposalMethod)
VALUES ('Cardboard', 'Recycle');
INSERT INTO material (materialName, disposalMethod)
VALUES('Paper', 'Recycle');
INSERT INTO material (materialName, disposalMethod)
VALUES('Plastic', 'Conditional');
INSERT INTO material (materialName, disposalMethod)
VALUES('Glass', 'Recycle');
INSERT INTO material (materialName, disposalMethod)
VALUES('Metal', 'Conditional');
INSERT INTO material (materialName, disposalMethod)
VALUES('Food', 'Compost');
INSERT INTO material (materialName, disposalMethod)
VALUES('Yard Waste', 'Compost');

INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Plastic container', 3, 'Recycle');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Plastic styrofoam', 3, 'Garbage');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Plastic produce sticker', 3, 'Garbage');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Plastic straw', 3, 'Garbage');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Plastic shopping bag', 3, 'Garbage');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Plastic chip bag', 3, 'Garbage');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Plastic bottle', 3, 'Recycle');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Plastic lid', 3, 'Recycle');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Plastic mailer', 3, 'Garbage');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Plastic bubble wrap', 3, 'Garbage');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Plastic pesticide container', 3, 'Garbage');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Plastic laundry detergent jug', 3, 'Recycle');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Plastic shampoo/lotion bottle', 3, 'Recycle');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Metal food can', 5, 'Recycle');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Metal paint can', 5, 'Garbage');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Metal hangers', 5, 'Garbage');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Metal aerosal spray can', 5, 'Garbage');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Metal cable', 5, 'Garbage');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Metal battery', 5, 'Drop off');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Metal beverage can', 5, 'Recycle');
