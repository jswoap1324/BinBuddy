/*
GENERAL RECYCLING GUIDELINES:
- Empty, clean, and dry
- Replace caps/lid onto bottle/container (do not recycle caps/lids under 3 inches separately)
*/

PRAGMA foreign_keys = ON;

-- Drop existing tables if they exist
DROP TABLE IF EXISTS ITEM;


-- Create Tables
CREATE TABLE ITEM (
	itemID INT PRIMARY KEY,  -- This is the serial number
	name varchar(120),
	disposalMethod varchar(80)
);

-- Insert Data
INSERT INTO ITEM VALUES
(816645024352, "The Honest Company Hand Sanitizer Spray Coastal Surf, 2 fl oz", "Trash cap and pump, Recycle bottle"),
(812154035216, "Native Plastic Free Deodorant Aluminum Free Eucalyptus & Mint, 2.65 oz", "Compost"),
(041507070080, "Thayers Natural Remedies Witch Hazel Alcohol Free Unscented Toner, 12 fl oz", "Recycle"),
(850007187279, "TGIN Rose Water Smoothing Leave-In Conditioner, 13 fl oz", "Recycle bottle, Trash pump"),
(603084494514, "Garnier Micellar Water Waterproof Makeup Remover and Facial Cleanser, 3.4 fl oz", "Recycle"),
(037000808053, "Secret Outlast Invisible Solid Antiperspirant Deodorant for Women Completely Clean Scent, 2.6oz", "Trash"),
(018787782057, "Dr. Bronner's Unscented Bar Soap, 5oz", "Recycle"),
(048341006671, "up&up Basic Cotton Rounds Nail Polish and Makeup Remover Pads, 100ct", "Trash"),
(048341004097, "up&up Regular Cotton Swabs Paper Sticks, 750ct", "Recycle paper components, Trash plastic tray"),
(9421906696356, "anihana Aromatherapy Essential Oil Mint Refresher Peppermint and Eucalyptus Shower Steamer, 1.76oz", "Recycle paper components, Trash plastic bag"),
(688047130623, "Not Your Mother's Curl Talk Cream, 6 fl oz", "Trash"),
(071618115141, "Bar Keepers Friend Multipurpose Household Cleanser & Polish, 21 oz", "Recycle"),
(732913450800, "Seventh Generation EasyDose Laundry Detergent Ultra Concentrated Mango & Mandarin Scent, 23.1 fl oz", "Recycle"),
(840408178976, "Beekman 1802 Milk Drops, 0.5 fl oz", "Recycle paper box, Trash bottle and dropper"),
(0667558315668, "Bath & Body Works Warm Vanilla Sugar Fine Fragrance Mist, 2.5 fl oz", "Recycle bottle, Trash cap and pump"),
(854049002064, "Acure Brightening Facial Scrub Unscented, 4 fl oz", "Recycle"),
(621732003260, "Marc Anthony Strictly Curls Curl Envy Cream Hair Styling Product & Softener Shea Butter, 6 fl oz", "Trash"),
(897799001598, "Soothing Touch Herbal Salt Tangerine Scrub, 20 oz", "Recycle"),
(710632403772, "up&up Strengthening Nail Polish Remover, 6 fl oz", "Recycle"),
(085239057292, "Good & Gather Distilled White Vinegar, 16 fl oz", "Recycle"),
(072140452315, "Aquaphor Healing Ointment Skin Protectant and Moisturizer for Dry and Cracked Skin Unscented, 1.75oz", "Recycle"),
(022600029304, "Arm & Hammer Simply Saline Nasal Mist, 3.1 oz", "Recycle"),
(310158840602, "Sensodyne Flouride Toothpaste for Sensitive Teeth and Cavity Prevention, 3.4 oz", "Recycle paper components, Trash tube and cap"),
(602652282201, "KIND Energy Bar Chocolate Chunk, 12.6 oz / 6 ct", "Recycle paper components, Trash plastic package"),
(014100052951, "Pepperidge Farm Goldfish Cheddar Crackers, 10 oz", "Recycle paper components, Trash inner bag"),
(085239167243, "Good & Gather Cinnamon Granola, 12 oz", "Trash"),
(041548614045, "Outshine Lemonade Frozen Fruit Bar, 6 ct", "Recycle paper components, Trash plastic package"),
(048121216573, "Thomas' Plain Mini Bagels, 15 oz / 10 ct", "Trash"),
(02172701, "Philadelphia Strawberry Cream Cheese Spread, 7.5 oz", "Recycle"),
(072830702225, "Tillamook Seriously Strawberry Cream Cheese Spread, 7 oz", "Recycle"),
(818290012845, "Chobani Greek Yogurt Peach, 5.3 oz / 4 ct", "Recycle cup and paper components, Trash cup seal"),
(051500141342, "Smucker's Natural Red Raspberry Fruit Spread, 17.25 oz", "Recycle"),
(85923003772, "EcoLips Pomegrante Lip Balm, 0.25 oz", "Trash"),
(815691003038, "C.O. Bigelow My Favorite Lip Balm No. 303, 0.5 oz", "Trash"),
(022000159335, "Altoids Peppermint Mint Candies, 1.7 oz", "Recycle"),
(071662040246, "Crayola 24ct Pre-sharpened Colored Pencils", "Recycle"),
(079567490005, "WD-40 Industrial Lubricants Mutli-Use Product, 3 oz", "Recycle"),
(305210238596, "Vaseline Intensive Care Moisturizing Advance Repair Body Lotion Unscented, 2 fl oz", "Trash"),
(305210142541, "Vaseline Intensive Care Moisturizing Advance Repair Body Lotion Unscented, 32 fl oz", "Recycle bottle, Trash pump"),
(046716581334, "D'Addario Reserve Bb Clarinet Reeds, Strength 2.0, 10 ct", "Recycle paper box, Compost reed, Trash reed case and package"),
(008576110048, "Vandoren CR103 Bb Clarinet Traditional Reeds Strength 3, 10 ct", "Recycle paper box, Compost reed, Trash reed case and package"),
(008576110987, "Vandoren CR803 Bb Clarinet V21 Reeds Strength 3, 10 ct", "Recycle paper box, Compost reed, Trash reed case and package"),
(673419408769, "Lego 40797 Eeyore", "Recycle paper box, Trash plastic bags"),
(638060855393, "Command Damage-Free Hanging Indoor Terrace Hooks", "Recycle paper card, Trash plastic tray"),
(051131851245, "Command Damage-Free Hanging Medium Refill Strips", "Recycle paper card, Trash plastic tray"),
(051141370040, "Command Damage-Free Hanging Universal Picture Hangers", "Recycle paper card, Trash plastic tray");










/*
-- Drop existing tables if they exist
DROP TABLE IF EXISTS Material;
DROP TABLE IF EXISTS SpecificItem;

-- Create Tables
CREATE TABLE BAR


CREATE TABLE MATERIAL (
	materialID INT AUTO_INCREMENT PRIMARY KEY,
	materialName varchar(60),
	disposalMethod varchar(60)
);

CREATE TABLE SPECIFIC_ITEM (
	itemID INT AUTO_INCREMENT PRIMARY KEY,
	itemName varchar(60),
	materialID INT, 			-- foreign key
	disposalMethod varchar(60),
	FOREIGN KEY (materialID) REFERENCES Material(materialID) ON UPDATE CASCADE
);

-- Insert Data
INSERT INTO MATERIAL VALUES
('Cardboard', 'Recycle'),
('Paper', 'Recycle'),
('Plastic', 'Conditional'),
('Glass', 'Recycle'),
('Metal', 'Conditional'),
('Food', 'Compost'),
('Yard Waste', 'Compost');

INSERT INTO SPECIFIC_ITEM VALUES
('Plastic container', 3, 'Recycle'),
('Plastic styrofoam', 3, 'Garbage'),
('Plastic produce sticker', 3, 'Garbage'),
('Plastic straw', 3, 'Garbage'),
('Plastic shopping bag', 3, 'Garbage'),
('Plastic chip bag', 3, 'Garbage'),
('Plastic bottle', 3, 'Recycle'),
('Plastic lid', 3, 'Recycle'),
('Plastic mailer', 3, 'Garbage'),
('Plastic bubble wrap', 3, 'Garbage'),
('Plastic pesticide container', 3, 'Garbage'),
('Plastic laundry detergent jug', 3, 'Recycle'),
('Plastic shampoo/lotion bottle', 3, 'Recycle'),
('Metal food can', 5, 'Recycle'),
('Metal paint can', 5, 'Garbage'),
('Metal hangers', 5, 'Garbage'),
('Metal aerosal spray can', 5, 'Garbage'),
('Metal cable', 5, 'Garbage'),
('Metal battery', 5, 'Drop off'),
('Metal beverage can', 5, 'Recycle');
*/

-- MySQL Code
/*
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
*/
