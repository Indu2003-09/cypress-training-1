describe('E-commerce Website Tests', () => {
    it('should login and add item to cart', () => {
      cy.visit('https://www.amazon.in/-/hi/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fspr%2Freturns%2Fgift&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_psr_desktop_in&openid.mode=checkid_setup&language=en_IN&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
      cy.fixture('amazon.json').then((data)=>{
      cy.get('[class="a-input-text a-span12 auth-autofocus auth-required-field"]').type(data.username);
      cy.get('[name="password"]').type(data.password);
      cy.get('span').eq(0).click();
      cy.get('#nav-link-accountList-nav-line-1').should('be.visible');
      
  // cy.get('[data-csa-c-content-id="nav_cs_fresh"]').click()
  // cy.visit('https://www.amazon.in/Fresh-Tomato-Hybrid-1kg-Pack/dp/B07BG6QWJK?pd_rd_w=XYL0h&content-id=amzn1.sym.a2567b9c-d91a-4f86-8046-1598b24fa6c5&pf_rd_p=a2567b9c-d91a-4f86-8046-1598b24fa6c5&pf_rd_r=P43VPZ1NXVRF4EQC8CDT&pd_rd_wg=JYkl2&pd_rd_r=66717a49-86a6-4f3c-8a6f-eb8f9a8cb343&pd_rd_i=B07BG6QWJK&fpw=alm&almBrandId=ctnow&ref_=pd_alm_fs_mr_dsk_sf_rzg_1_1_i')
  // cy.get('[aria-labelledby="freshAddToCartButton-announce"]').click()   
    });
      })
      
  });
  

  

