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
VALUES ('Plastic Container', 3, 'Recycle');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Plastic Styrofoam', 3, 'Garbage');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Plastic Produce Sticker', 3, 'Garbage');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Metal can', 5, 'Recycle');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Metal paint can', 5, 'Garbage');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Metal hangers', 5, 'Garbage');
INSERT INTO SpecificItem (itemName, materialID, disposalMethod)
VALUES ('Metal aerosal spray can', 5, 'Garbage');
