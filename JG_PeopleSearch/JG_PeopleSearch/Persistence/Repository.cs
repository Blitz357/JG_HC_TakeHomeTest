using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;

namespace JG_PeopleSearch.Persistence
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        protected readonly DbContext Context;
        private readonly IDbSet<TEntity> _entities;

        public Repository(DbContext context)
        {
            Context = context;
            _entities = context.Set<TEntity>();
        }

        public TEntity Get(int id)
        {
            return _entities.Find(id);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _entities.ToList();
        }

        public IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicate)
        {
            return _entities.Where(predicate);
        }

        public void Add(TEntity entity)
        {
            _entities.Add(entity);
        }

        public void Remove(TEntity entity)
        {
            _entities.Remove(entity);
        }
    }
}