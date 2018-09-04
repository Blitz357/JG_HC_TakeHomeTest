using System.Collections.Generic;
using System.Web.Http;
using JG_PeopleSearch.Models;
using JG_PeopleSearch.Persistence;

namespace JG_PeopleSearch.Controllers
{
    public class PeopleController : ApiController
    {
        private readonly IUnitOfWork _unitOfWork;

        public PeopleController() : this(new UnitOfWork())
        {
        }

        internal PeopleController(IUnitOfWork unitOfWork)
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

        // GET: api/People
        public IEnumerable<Person> Get()
        {
            return _unitOfWork.People.GetAll();
        }

        // GET: api/People?filterBy=blah
        public IEnumerable<Person> Get(string filterBy)
        {
            return _unitOfWork.People.GetPeopleFilteredBy(filterBy);
        }

        // GET: api/People/5
        public Person Get(int id)
        {
            return _unitOfWork.People.Get(id);
        }

        // POST: api/People
        public void Post([FromBody]Person person)
        {
            _unitOfWork.People.Add(person);
            _unitOfWork.Complete();
        }

        // PUT: api/People/5
        public void Put(int id, [FromBody]Person person)
        {
            var toUpdate = _unitOfWork.People.Get(id);
            if (toUpdate != null)
            {
                toUpdate.UpdateDataFrom(person);
                _unitOfWork.Complete();
            }
        }

        // DELETE: api/People/5
        public void Delete(int id)
        {
            var toDelete = _unitOfWork.People.Get(id);
            if (toDelete != null)
            {
                _unitOfWork.People.Remove(toDelete);
                _unitOfWork.Complete();
            }
        }
    }
}
