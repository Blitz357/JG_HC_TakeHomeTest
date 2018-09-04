using System;
using System.Globalization;
using System.Threading;
using System.Web.Http;
using JG_PeopleSearch.Persistence;

namespace JG_PeopleSearch.Controllers
{
    public class PeopleImageController : ApiController
    {
        private readonly IUnitOfWork _unitOfWork;

        public PeopleImageController() : this(new UnitOfWork())
        {
        }

        internal PeopleImageController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _unitOfWork?.Dispose();
            }

            base.Dispose(disposing);
        }

        // GET: api/PeopleImage/5
        public string Get(int id)
        {
            var peopleImage = _unitOfWork.PeopleImages.Get(id);
            return string.Format(CultureInfo.InvariantCulture, "data:image/jpeg;base64,{0}", Convert.ToBase64String(peopleImage.Image));
        }
    }
}
