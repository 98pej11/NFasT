-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema nfast
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema nfast
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `nfast` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema nfast
-- -----------------------------------------------------
USE `nfast` ;

-- -----------------------------------------------------
-- Table `nfast`.`owner`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nfast`.`owner` (
  `owner_sequence` BIGINT NOT NULL AUTO_INCREMENT,
  `owner_wallet` VARCHAR(255) NOT NULL,
  `owner_name` VARCHAR(50) NOT NULL,
  `owner_category` VARCHAR(20) NOT NULL,
  `owner_address` VARCHAR(255) NOT NULL,
  `owner_phone` VARCHAR(13) NOT NULL,
  `owner_image` VARCHAR(255) NULL,
  `owner_detail` VARCHAR(255) NULL,
  `owner_office_hours` VARCHAR(255) NULL,
  `owner_is_approved` TINYINT NOT NULL,
  `owner_date` DATE NOT NULL,
  PRIMARY KEY (`owner_sequence`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nfast`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nfast`.`user` (
  `user_sequence` BIGINT NOT NULL AUTO_INCREMENT,
  `user_wallet` VARCHAR(255) NOT NULL,
  `user_image` VARCHAR(255) NULL,
  `user_nickname` VARCHAR(50) NOT NULL DEFAULT 'unnamed',
  PRIMARY KEY (`user_sequence`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nfast`.`nfast`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nfast`.`nfast` (
  `nfast_sequence` BIGINT NOT NULL AUTO_INCREMENT,
  `nfast_price` DECIMAL NOT NULL,
  `nfast_eigenvalue` VARCHAR(255) NOT NULL,
  `nfast_date` DATE NOT NULL,
  `nfast_use_state` TINYINT NULL DEFAULT 0,
  `nfast_sale_state` TINYINT NULL DEFAULT 0,
  `nfast_transaction_count` BIGINT NULL DEFAULT 0,
  `nfast_default_price` DECIMAL NOT NULL,
  `nfast_qr` VARCHAR(255) NOT NULL,
  `owner_sequence` BIGINT NOT NULL,
  `user_sequence` BIGINT NOT NULL,
  PRIMARY KEY (`nfast_sequence`),
  INDEX `fk_nfast_owner_idx` (`owner_sequence` ASC),
  INDEX `fk_nfast_user1_idx` (`user_sequence` ASC),
  CONSTRAINT `fk_nfast_owner`
    FOREIGN KEY (`owner_sequence`)
    REFERENCES `nfast`.`owner` (`owner_sequence`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_nfast_user1`
    FOREIGN KEY (`user_sequence`)
    REFERENCES `nfast`.`user` (`user_sequence`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nfast`.`trade_list`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nfast`.`trade_list` (
  `trade_list_sequence` BIGINT NOT NULL AUTO_INCREMENT,
  `trade_list_transaction` VARCHAR(255) NOT NULL,
  `trade_list_price` DECIMAL NOT NULL,
  `trade_list_date` DATE NOT NULL,
  `trade_list_type` TINYINT NOT NULL,
  `user_sequence` BIGINT NOT NULL,
  PRIMARY KEY (`trade_list_sequence`),
  INDEX `fk_trade_list_user1_idx` (`user_sequence` ASC),
  CONSTRAINT `fk_trade_list_user1`
    FOREIGN KEY (`user_sequence`)
    REFERENCES `nfast`.`user` (`user_sequence`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nfast`.`bookmark`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nfast`.`bookmark` (
  `bookmark_sequence` BIGINT NOT NULL AUTO_INCREMENT,
  `owner_sequence` BIGINT NOT NULL,
  `user_sequence` BIGINT NOT NULL,
  PRIMARY KEY (`bookmark_sequence`),
  INDEX `fk_bookmark_owner1_idx` (`owner_sequence` ASC),
  INDEX `fk_bookmark_user1_idx` (`user_sequence` ASC),
  CONSTRAINT `fk_bookmark_owner1`
    FOREIGN KEY (`owner_sequence`)
    REFERENCES `nfast`.`owner` (`owner_sequence`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_bookmark_user1`
    FOREIGN KEY (`user_sequence`)
    REFERENCES `nfast`.`user` (`user_sequence`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nfast`.`income_list`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nfast`.`income_list` (
  `income_list_sequence` BIGINT NOT NULL AUTO_INCREMENT,
  `income_list_price` DECIMAL NOT NULL,
  `income_list_date` DATE NOT NULL,
  `income_list_type` TINYINT NOT NULL,
  `owner_sequence` BIGINT NOT NULL,
  PRIMARY KEY (`income_list_sequence`),
  INDEX `fk_income_list_owner1_idx` (`owner_sequence` ASC),
  CONSTRAINT `fk_income_list_owner1`
    FOREIGN KEY (`owner_sequence`)
    REFERENCES `nfast`.`owner` (`owner_sequence`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nfast`.`review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nfast`.`review` (
  `review_sequence` BIGINT NOT NULL AUTO_INCREMENT,
  `review_topic` INT NOT NULL,
  `review_sub_topic` INT NULL,
  `review_count` INT NULL,
  `review_content` VARCHAR(255) NOT NULL,
  `owner_sequence` BIGINT NOT NULL,
  PRIMARY KEY (`review_sequence`),
  INDEX `fk_review_owner1_idx` (`owner_sequence` ASC),
  CONSTRAINT `fk_review_owner1`
    FOREIGN KEY (`owner_sequence`)
    REFERENCES `nfast`.`owner` (`owner_sequence`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
