-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema nfast
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema nfast
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `nfast` DEFAULT CHARACTER SET utf8mb3 ;
USE `nfast` ;

-- -----------------------------------------------------
-- Table `nfast`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nfast`.`user` (
  `user_sequence` BIGINT NOT NULL AUTO_INCREMENT,
  `user_wallet` VARCHAR(255) NOT NULL,
  `user_image` VARCHAR(255) NULL DEFAULT NULL,
  `user_nickname` VARCHAR(50) NOT NULL DEFAULT 'unnamed',
  PRIMARY KEY (`user_sequence`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `nfast`.`store`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nfast`.`store` (
  `store_sequence` BIGINT NOT NULL AUTO_INCREMENT,
  `store_wallet` VARCHAR(255) NOT NULL,
  `store_name` VARCHAR(50) NOT NULL,
  `store_category` VARCHAR(20) NOT NULL,
  `store_address` VARCHAR(255) NOT NULL,
  `store_phone` VARCHAR(13) NOT NULL,
  `store_image` VARCHAR(255) NULL,
  `store_detail` VARCHAR(255) NULL,
  `store_office_hours` VARCHAR(255) NULL,
  `store_date` DATE NOT NULL,
  `store_x` VARCHAR(25) NOT NULL,
  `store_y` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`store_sequence`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `nfast`.`bookmark`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nfast`.`bookmark` (
  `bookmark_sequence` BIGINT NOT NULL AUTO_INCREMENT,
  `user_sequence` BIGINT NOT NULL,
  `store_sequence` BIGINT NOT NULL,
  PRIMARY KEY (`bookmark_sequence`),
  INDEX `fk_bookmark_user1_idx` (`user_sequence` ASC),
  INDEX `fk_bookmark_store1_idx` (`store_sequence` ASC),
  CONSTRAINT `fk_bookmark_user1`
    FOREIGN KEY (`user_sequence`)
    REFERENCES `nfast`.`user` (`user_sequence`),
  CONSTRAINT `fk_bookmark_store1`
    FOREIGN KEY (`store_sequence`)
    REFERENCES `nfast`.`store` (`store_sequence`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `nfast`.`income_list`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nfast`.`income_list` (
  `income_list_sequence` BIGINT NOT NULL AUTO_INCREMENT,
  `income_list_price` DECIMAL(10,0) NOT NULL,
  `income_list_date` DATE NOT NULL,
  `income_list_type` TINYINT NOT NULL,
  `store_sequence` BIGINT NOT NULL,
  PRIMARY KEY (`income_list_sequence`),
  INDEX `fk_income_list_store1_idx` (`store_sequence` ASC),
  CONSTRAINT `fk_income_list_store1`
    FOREIGN KEY (`store_sequence`)
    REFERENCES `nfast`.`store` (`store_sequence`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `nfast`.`nfast`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nfast`.`nfast` (
  `nfast_sequence` BIGINT NOT NULL AUTO_INCREMENT,
  `nfast_price` DECIMAL(10,0) NOT NULL,
  `nfast_eigenvalue` VARCHAR(255) NOT NULL,
  `nfast_date` DATE NOT NULL,
  `nfast_use_state` TINYINT NULL DEFAULT '0',
  `nfast_sale_state` TINYINT NULL DEFAULT '0',
  `nfast_transaction_count` BIGINT NULL DEFAULT '0',
  `nfast_default_price` DECIMAL(10,0) NOT NULL,
  `nfast_qr` VARCHAR(255) NOT NULL,
  `user_sequence` BIGINT NULL,
  `store_sequence` BIGINT NOT NULL,
  PRIMARY KEY (`nfast_sequence`),
  INDEX `fk_nfast_store1_idx` (`store_sequence` ASC),
  CONSTRAINT `fk_nfast_store1`
    FOREIGN KEY (`store_sequence`)
    REFERENCES `nfast`.`store` (`store_sequence`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `nfast`.`review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nfast`.`review` (
  `review_sequence` BIGINT NOT NULL AUTO_INCREMENT,
  `review_topic` INT NOT NULL,
  `review_sub_topic` INT NULL DEFAULT NULL,
  `review_content` VARCHAR(255) NOT NULL,
  `user_sequence` BIGINT NULL,
  `store_sequence` BIGINT NOT NULL,
  PRIMARY KEY (`review_sequence`),
  INDEX `fk_review_store1_idx` (`store_sequence` ASC),
  CONSTRAINT `fk_review_store1`
    FOREIGN KEY (`store_sequence`)
    REFERENCES `nfast`.`store` (`store_sequence`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `nfast`.`trade_list`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nfast`.`trade_list` (
  `trade_list_sequence` BIGINT NOT NULL AUTO_INCREMENT,
  `trade_list_transaction` VARCHAR(255) NOT NULL,
  `trade_list_price` DECIMAL(10,0) NOT NULL,
  `trade_list_date` DATE NOT NULL,
  `trade_list_type` TINYINT NOT NULL,
  `user_sequence` BIGINT NOT NULL,
  PRIMARY KEY (`trade_list_sequence`),
  INDEX `fk_trade_list_user1_idx` (`user_sequence` ASC),
  CONSTRAINT `fk_trade_list_user1`
    FOREIGN KEY (`user_sequence`)
    REFERENCES `nfast`.`user` (`user_sequence`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
