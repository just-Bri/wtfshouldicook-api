const chai = require("chai");
const chaiHttp = require("chai-http");
const supertest = require("supertest");
const should = chai.should();
const server = require("../src/server");

global.chai = chai;
global.supertest = supertest;
global.chaiHttp = chaiHttp;
global.should = should;
global.server = server;
