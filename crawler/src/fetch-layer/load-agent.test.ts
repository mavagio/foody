import * as chai from 'chai';
import 'mocha';
import {LoadAgent} from './load-agent';

describe("loadSourceUrls()", () => {
  it('should have a return value of type array', () =>{
    LoadAgent.loadSourceUrls().then(urls => {
      chai.expect(urls).to.be.a('Array')
    });
  });

  it('should have a return value of at least one', () => {
    LoadAgent.loadSourceUrls().then(urls => {
      chai.expect(urls.length).to.be.above(0);
    });
  });
});