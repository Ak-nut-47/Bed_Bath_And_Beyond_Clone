let navbar = () =>{
    return`
    <div class="header">
    <div>
      <div type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample"
      aria-controls="offcanvasExample" class="menupng">
      </div>
      
      <div class="overstocklogo" onclick="window.location.href='index.html'">
        <img class="overstockIndex" src="https://i.postimg.cc/0yCKC2SV/svgexport-1.png" alt="" />
      </div>
      <div class="class-input">
        <div>
          <input type="text" placeholder="Search" />
        </div>
        <div>
        <img src="https://i.postimg.cc/tgWqzB8p/Search-1.png alt="">
      </div>
      </div>
      <div id="account1" class="class-account class-account-common">
        <div onclick="window.location.href='signup.html'">
          <img src="https://i.postimg.cc/RCb3PDNz/User.png" alt="" />
        </div>
        <div onclick="window.location.href='signup.html'" >Account</div>
        <div class="chevronup">
          <img src="https://i.postimg.cc/DZHpvK2K/Chevron-Up.png" alt="" />
        </div>
        <div class="account-dropdown-content">
          <div>My Account</div>
          <div>My Orders</div>
          <div>My Reviews</div>
          <div>Gift Cards</div>
          <div>Help</div>
          <div>Sign Out</div>
        </div>
      </div>
      <div onclick="window.location.href='list.html'" class="class-account class-account-common">
        <div>
          <img src="https://i.postimg.cc/B6TrjykP/Heart.png" alt="" />
        </div>
        <div>Lists</div>
        <div class="chevronup">
          <img src="https://i.postimg.cc/DZHpvK2K/Chevron-Up.png" alt="" />
        </div>
        <div class="account-dropdown-content" style="right: -100%">
          <div>Favorites</div>
          <div>Save for Later</div>
          <div>View All My Lists</div>
          <div>Find a List</div>
        </div>
      </div>
      <div id="cart1" class="class-account">
        <div>
          <img onclick="window.location.href='cart.html'" src="https://i.postimg.cc/DyZNh8vX/Cart-Empty.png" alt="" />
        </div>
        <div onclick="window.location.href='cart.html'">Cart</div>
      </div>
    </div>
    <div class="section-div">
    <div onclick="window.location.href='furniture.html'"
    >Furniture</div>
      <div>Rugs</div>
      <div>Decor</div>
      <div>Bed & Bath</div>
      <div>Home Improvement</div>
      <div>Kitchen</div>
      <div>Outdoor</div>
      <div>Jewelry</div>
      <div>Lighting</div>
      <div>Kids & Baby</div>
      <div>More</div>
      <div>Holiday & Gifts</div>
      <div>Sales & Deals</div>
    </div>
    <div class="dropdown-content-main dropdown-content-part">
      <div>
        <div>
          <div class="dark-div">Living Room Furniture</div>
          <div>Sofas & Couches</div>
          <div>Sectionals</div>
          <div>Benches</div>
          <div>Ottomans & Poufs</div>
          <div>Accent Chairs</div>
          <div>Recliners</div>
          <div>Coffee & Accent Tables</div>
          <div>TV Stands</div>
        </div>
        <div>
          <div class="dark-div">Patio & Outdoor Furniture</div>
          <div>Patio Furniture Sets</div>
          <div>Sofas, Chairs & Sectionals</div>
          <div>Dining Sets</div>
          <div>Coffee & Side Tables</div>
          <div>Chaise Lounges</div>
          <div>Adirondack Chairs</div>
        </div>
      </div>
      <div>
        <div>
          <div class="dark-div">Bedroom Furniture</div>
          <div>Beds</div>
          <div>Bedroom Sets</div>
          <div>Headboards</div>
          <div>Bed Frames</div>
          <div>Dressers & Chests</div>
          <div>Nightstands</div>
          <div>Armoires & Wardrobes</div>
          <div>Mattresses</div>
          <div>Kids Beds</div>
        </div>
        <div>
          <div class="dark-div">Office Furniture</div>
          <div>Desks</div>
          <div>Office Chairs</div>
          <div>Small Space Desks</div>
          <div>Office Shelves & Storage</div>
          <div>File Cabinets</div>
        </div>
      </div>
      <div>
        <div>
          <div class="dark-div">Dining, Kitchen & Bar</div>
          <div>Kitchen & Dining Sets</div>
          <div>Kitchen & Dining Chairs</div>
          <div>Kitchen & Dining Tables</div>
          <div>Counter & Bar Stools</div>
          <div>Bar Tables</div>
          <div>Buffets & Sideboards</div>
          <div>Home Bars</div>
          <div>Kitchen Islands & Carts</div>
          <div>Kitchen Furniture</div>
        </div>
        <div>
          <div class="dark-div">More</div>
          <div>Entryway</div>
          <div>Bathroom</div>
          <div>Home Gym</div>
          <div>Rec Room</div>
          <div>Small Space Living</div>
        </div>
      </div>
      <div>
        <div class="dropdown-img-cont">
          <div>
            <img
              src="https://i.postimg.cc/tg7z1Kz4/Warrenton-Boho-Handcrafted-2-Door-Acacia-Wood-Sideboard-by-Christopher-Knight-Home.jpg"
              alt=""
            />
          </div>
          <div>extra 15% off</div>
          <div>Select Furniture by Christopher Knight*</div>
        </div>
        <div>
          <div class="dark-div">More Ways to Shop</div>
          <div class="red-div">Featured Sales</div>
          <div class="red-div">New Arrivals</div>
          <div class="red-div">Clearance</div>
          <div class="red-div">Furniture Advice</div>
        </div>
      </div>
    </div>
 

      
    </div>
  </div>`

}
export default navbar; 