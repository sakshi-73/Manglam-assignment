import React from "react";
import { FaSearch } from "react-icons/fa";

function Home() {
  return (
    <div className="backgroundclr">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <h6 className="d-flex align-items-centre justify-content-centre justify-content-lg-start">
            Athlets's
            <br /> Academy
          </h6>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 link-light">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-light">
                Category
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-light">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-light">
                Wallet
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-light">
                <FaSearch />
              </a>
            </li>
          </ul>

          <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <button className="btn btn-light me-2">LOGIN</button>
            <button className="btn btn-light">SIGN UP</button>
          </div>

          <div className="dropdown text-end">
            <a
              href="#"
              className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/7ee4/ef69/07a7b46c42670741052ba62db7e95af0?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FtayzFVtINPs4L7A-hkYxIy-CrLXV1oPaY~e4Pw2nfDo06KCv4NMei3ZqMDANFwZmicYczucRwdQYANKn76-L6-rNYj93rG1Ma4HqZSfGV~NTecnQPGbxu7~Xf4wQEBZHlBMqQF8273PXF8olGCyxO2-MPKz~RJzyZWVJUaq2ORL842I2d1g2gfXfjY52YA0E9wp9vWVApTiAAp7Y60F06qbQi2d3UVFVgKlUPCWdCWW~EfUJfwZ-1Syl-QgOi5xM26V7X1uvYeUzcbJC43G4M3ne9-~F9xbdNNGjIIg30VFHaUymJY9Nxj7tjT8eBZKV4CuvhUPeGxKm7zhbqOfmg__"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle dropbtn"
              />
            </a>
            <div class="dropdown-content">
              <a href="#">
                <h6>
                  <b>Loreta Milla</b>
                </h6>
              </a>
              <a href="#">Profie</a>
              <a href="#">Downloads </a>
              <a href="#">Setting </a>
              <a href="#">Help </a>
              <a href="#">Log Out </a>
            </div>
          </div>
        </div>
      </div>

      <h1 className="head">BE A PART OF OUR TEAM</h1>

      <div className="img1">
        <img src="https://s3-alpha-sig.figma.com/img/46b7/0afd/1cb992ce487e8889e0f6744c00d31b4e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fOkL9zLnNUksjbfheGbA-lWtJSDic~oJzIgADaZg1toEiayNVD2uLXP2kwu03kcoEk3nAo1la4pGcB9m7XKNjnSU1f428wvTfy5ZYXULEoZXxdR-0JsnEtqBcowOPoUN0A51mhmNFPstWjqoI4vE2jTqkV4tFeY61-naBrGuoYMdK~BXYKoRyYJM16-D7a-fgYoYkkOCb79SEv0v9GJA6PttMdEfYyNfO27mLkZb~Cm6Gwa5fFYI~yWHZf~EIP-dggcZlyc3Kv1jZchvMb-XwJ4lSn7UkN5NW3-ommbZ~90OilytFeIq0OoZm2NO9o6fD7op4mEXLCqfmRtE33vHag__"></img>
      </div>

      <div className="img2">
        <img src="https://s3-alpha-sig.figma.com/img/46b7/0afd/1cb992ce487e8889e0f6744c00d31b4e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fOkL9zLnNUksjbfheGbA-lWtJSDic~oJzIgADaZg1toEiayNVD2uLXP2kwu03kcoEk3nAo1la4pGcB9m7XKNjnSU1f428wvTfy5ZYXULEoZXxdR-0JsnEtqBcowOPoUN0A51mhmNFPstWjqoI4vE2jTqkV4tFeY61-naBrGuoYMdK~BXYKoRyYJM16-D7a-fgYoYkkOCb79SEv0v9GJA6PttMdEfYyNfO27mLkZb~Cm6Gwa5fFYI~yWHZf~EIP-dggcZlyc3Kv1jZchvMb-XwJ4lSn7UkN5NW3-ommbZ~90OilytFeIq0OoZm2NO9o6fD7op4mEXLCqfmRtE33vHag__"></img>
      </div>

      <div>
        <img
          className="img3"
          src="https://s3-alpha-sig.figma.com/img/12ac/c710/9ef97a1fc35797a6caa0978637c8a277?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aCOa6uxKm6~prgqgbdESIaljZ01dPdGEtjLD8ICrMqnpRMA4qn6VExAZFEv~zZ3ew-CYdIjTy8Pkm4z2JaspyZ2jdtLWY5j90uxJrc4TKOMTOq8HpO88S~8qivVlmFFdp7KkG9-HXwJdNhTBPohObKCFbafBdIcIyfcSuMCHggSkFAxkcsj0iRSPP-oq7eNho9TfsgzrbPDRbRlGkwaXst-sQwWubp4ok9bU-QYmxEe-oMKUVeI~DgZNEd4X4bLY2-nKawuz9tRht-PfnWqRlSNjKTwjqQocCZWhILdH-iIPOYMPdeDzAJ~g9Ro0GhHG6UkH1WOLBaTthVJK74GeQQ__"
        ></img>
      </div>
    </div>
  );
}

export default Home;
