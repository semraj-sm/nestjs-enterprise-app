# Enterprise NestJS Backend Development - Copilot Agent Instructions

## 🎯 Project Context
You are developing an **Enterprise-Grade Multi-Tenant Resource Management Platform** using **Node.js + TypeScript + NestJS**. This platform serves 10,000+ concurrent users across multiple organizations with real-time synchronization, 99.9% uptime, and sub-200ms response times.

## 🏢 Business Context & Domain

### Core Business Objectives
- **Multi-tenant enterprise resource management platform** with complete tenant isolation
- **Support 10,000+ concurrent users** across multiple organizations
- **Real-time data synchronization and notifications** using WebSocket and event-driven architecture
- **99.9% uptime and sub-200ms response times** for optimal user experience
- **Third-party integrations and API ecosystem** for extensibility

### Target Users & Access Levels
- **System Administrators**: Platform configuration, user management, system monitoring
- **Organization Admins**: Tenant-level administration, settings, user provisioning
- **Department Managers**: Resource allocation, team management, approval workflows
- **Employees**: Daily task management, resource access, time tracking
- **External Partners**: Limited API access for integrations and data exchange

### Key Business Domains
1. **Authentication & Authorization**: MFA, RBAC, SSO, JWT with refresh tokens
2. **Multi-tenancy**: Database-per-tenant, custom branding, feature flags, quotas
3. **User Management**: Lifecycle management, org hierarchy, bulk operations
4. **Resource Management**: Asset inventory, booking, workflows, analytics
5. **Project Management**: Projects, tasks, milestones, time tracking, documents
6. **Communication**: Real-time messaging, notifications, announcements
7. **Reporting & Analytics**: Custom reports, dashboards, data export, KPIs
8. **Integration**: REST/GraphQL APIs, webhooks, third-party connectors

## 📋 Technical Requirements

### Technology Stack & Architecture
- **Framework**: NestJS with TypeScript (strict mode)
- **Database**: PostgreSQL 14+ with read replicas + Redis caching + Elasticsearch
- **Authentication**: JWT + refresh tokens, MFA (TOTP/SMS), RBAC, SSO (SAML 2.0, OAuth 2.0)
- **Caching**: Redis for sessions and multi-level caching
- **Message Queue**: Bull Queue for background jobs and event processing
- **Testing**: Jest + Supertest (minimum 80% coverage)
- **Logging**: Winston with structured logs and correlation IDs
- **Validation**: class-validator decorators with custom validation rules
- **Configuration**: @nestjs/config with environment validation
- **Documentation**: Swagger/OpenAPI with Postman collections
- **File Storage**: AWS S3 or compatible object storage
- **Monitoring**: APM tools, health checks, distributed tracing

### Architecture Patterns
- **Microservices Architecture**: Domain-driven design with service boundaries
- **Event-Driven Architecture**: Message queues for real-time synchronization
- **CQRS Pattern**: Command Query Responsibility Segregation for complex operations
- **Repository Pattern**: Abstract data access layer with TypeORM/Prisma
- **Multi-Tenancy**: Database-per-tenant or schema-per-tenant isolation
- **Decorator Pattern**: Cross-cutting concerns (logging, caching, security)
- **Dependency Injection**: Comprehensive DI container usage throughout

## 🏗️ Project Structure Requirements

When generating code, follow this exact folder structure:

```
src/
├── config/              # Configuration files
├── core/               # Core framework components
│   ├── decorators/     # Custom decorators
│   ├── filters/        # Exception filters
│   ├── guards/         # Authentication & authorization guards
│   ├── interceptors/   # Request/response interceptors
│   ├── pipes/          # Validation & transformation pipes
│   └── middleware/     # Custom middleware
├── modules/            # Business logic modules
│   ├── auth/          # Authentication & MFA (TOTP, SMS)
│   ├── users/         # User lifecycle & profile management
│   ├── tenants/       # Multi-tenancy & white-labeling
│   ├── resources/     # Asset inventory & booking system
│   ├── projects/      # Project & task management
│   ├── notifications/ # Real-time messaging & WebSocket
│   ├── reports/       # Custom reports & analytics
│   ├── integrations/  # Third-party connectors & webhooks
│   └── health/        # Health checks & system monitoring
├── shared/            # Shared utilities
│   ├── database/      # Database entities, repositories, migrations
│   ├── interfaces/    # TypeScript interfaces
│   ├── enums/         # Enumerations
│   ├── constants/     # Application constants
│   ├── utils/         # Utility functions
│   └── services/      # Shared services
├── app.module.ts
└── main.ts
```

## 🔒 Security & Compliance Requirements

**Always implement these security measures:**
- **Multi-Factor Authentication**: TOTP and SMS-based MFA
- **Advanced RBAC**: Granular permissions with role hierarchies
- **Session Security**: Concurrent session limits and management
- **Data Encryption**: TLS 1.3, encryption at rest and in transit
- **API Security**: Rate limiting, input validation, CORS, secure headers
- **Audit Logging**: All authentication events and critical operations
- **Compliance**: GDPR, HIPAA, SOC 2 Type II considerations
- **Vulnerability Management**: Regular security audits and penetration testing
- **Secret Management**: Encrypted environment variables and secure key rotation

## 📊 Performance & Scalability Standards

**Code must meet these performance criteria:**
- **Response Time**: Sub-200ms for 95% of API requests
- **Concurrent Users**: Support 10,000+ concurrent users
- **Availability**: 99.9% uptime (8.76 hours downtime/year maximum)
- **Database Performance**: Query optimization, indexing, read replicas
- **Caching Strategy**: Multi-level caching (Redis, application-level)
- **Real-time Features**: WebSocket for instant notifications and updates
- **Pagination**: Cursor-based pagination for large datasets
- **Horizontal Scaling**: Load balancers and auto-scaling capabilities
- **Background Jobs**: Async processing with Bull Queue for heavy operations

## 🧩 Business-Specific Code Generation Guidelines

### 1. **Authentication & Authorization Module**
When creating auth-related code, always include:
- Multi-factor authentication (TOTP, SMS) implementation
- JWT with refresh token rotation and blacklisting
- Role-based access control with hierarchical permissions
- SSO integration points (SAML 2.0, OAuth 2.0)
- Session management with concurrent session limits
- Password policies with complexity requirements
- Comprehensive audit logging for all auth events

### 2. **Multi-Tenancy Implementation**
- Database-per-tenant or schema-per-tenant isolation
- Tenant context in all database operations
- Custom branding and white-labeling support
- Tenant-specific feature flags and configurations
- Resource quotas and usage tracking
- Cross-tenant data protection mechanisms

### 3. **Resource Management Features**
- Asset inventory with categorization and tagging
- Booking and scheduling system with conflict resolution
- Approval workflows with configurable rules
- Usage analytics and cost allocation
- Maintenance scheduling and tracking
- Integration with external asset management systems

### 4. **Project Management Capabilities**
- Project lifecycle management with status tracking
- Task assignment with dependencies and priorities
- Milestone management with deadline notifications
- Time tracking and timesheet integration
- Document management with version control
- Progress reporting and dashboard generation

### 5. **Real-time Communication**
- WebSocket implementation for instant messaging
- Event-driven notifications with multiple channels
- Customizable notification templates
- Push notification support for mobile apps
- Announcement system for organization-wide communications
- Integration with external communication platforms (Slack, Teams)

### 6. **Reporting & Analytics**
- Custom report builder with drag-and-drop interface
- Pre-built dashboard templates for common use cases
- Real-time analytics with live data updates
- Data export in multiple formats (PDF, Excel, CSV)
- Historical data analysis and trend reporting
- KPI tracking and business intelligence features

## 🧪 Testing Requirements

**Every generated code must include:**
- **Unit Tests**: >80% coverage for all services and utilities
- **Integration Tests**: API endpoint testing with Supertest
- **E2E Tests**: Complete user journey testing
- **Load Tests**: Performance testing for concurrent users
- **Security Tests**: Authentication and authorization testing
- **Database Tests**: Repository and query testing with test databases
- **Mock Services**: External service mocking for isolated testing
- **Test Data**: Factories and fixtures for consistent test data

## 📝 Documentation Standards

**Always provide:**
- **JSDoc Comments**: Comprehensive documentation for all methods
- **Swagger Decorators**: Complete API documentation with examples
- **README Files**: Module-specific documentation with usage examples
- **Type Definitions**: Comprehensive TypeScript interfaces
- **API Changelogs**: Version history and breaking changes
- **Business Logic Documentation**: Complex workflow explanations

## 🚀 API Standards & Integration Requirements

**REST API Requirements:**
- Use `/api/v1/` prefix with proper versioning strategy
- Implement comprehensive HTTP status codes (200, 201, 400, 401, 403, 404, 409, 500)
- Support advanced pagination, filtering, and sorting
- Include per-user and per-endpoint rate limiting
- Provide detailed error responses with correlation IDs
- Support bulk operations for efficiency
- Implement proper caching headers

**GraphQL Requirements:**
- Use code-first approach with TypeScript
- Implement DataLoader for N+1 query optimization
- Add field-level authorization and tenant isolation
- Support real-time subscriptions for live updates
- Include query complexity analysis and depth limiting
- Provide comprehensive schema documentation

**Integration Standards:**
- Webhook system with retry mechanisms and signature verification
- Third-party API connectors with error handling and rate limiting
- Import/Export APIs with validation and transformation
- Event-driven architecture with message queues
- Plugin architecture for custom business logic extensions

## 🔧 Development & Deployment Practices

**Code Quality & Standards:**
- **TypeScript**: Strict mode with comprehensive type definitions
- **ESLint & Prettier**: Consistent code formatting and linting
- **Testing**: Jest with comprehensive test coverage (>80%)
- **Code Reviews**: Mandatory peer reviews with security focus
- **Git Workflow**: Feature branch workflow with automated CI/CD checks
- **Documentation**: Inline documentation and API specifications

**Environment Management:**
- **Configuration**: Environment-based configuration with validation
- **Secrets Management**: Encrypted environment variables and key rotation
- **Feature Flags**: Tenant-level and global feature toggles
- **Database Migrations**: Version-controlled schema changes
- **Monitoring**: Health checks, metrics, and distributed tracing

**DevOps & Infrastructure:**
- **Containerization**: Docker with multi-stage builds
- **CI/CD Pipeline**: Automated testing, building, and deployment
- **Infrastructure as Code**: Terraform or similar tools
- **Zero-downtime Deployment**: Blue-green or rolling deployments
- **Monitoring**: APM tools, logging aggregation, and alerting
- **Backup & Recovery**: Automated backups with disaster recovery procedures

## 🎯 Multi-Tenancy & Business Logic Requirements

**Multi-Tenancy Implementation:**
- **Complete Data Isolation**: Database-per-tenant or schema-per-tenant
- **Custom Branding**: White-labeling with tenant-specific themes and logos
- **Feature Flags**: Tenant-level feature toggles and configuration
- **Resource Quotas**: Usage limits and billing integration
- **Cross-tenant Security**: Absolute data protection between tenants
- **Tenant Context**: Automatic tenant resolution in all operations

**Business Domain Implementation:**
- **User Lifecycle**: Registration, activation, suspension, deletion with audit trails
- **Organization Hierarchy**: Departments, teams, and role-based access
- **Resource Booking**: Scheduling system with conflict resolution and approval workflows
- **Project Management**: Task dependencies, milestone tracking, and progress reporting
- **Time Tracking**: Timesheet management with approval workflows
- **Document Management**: Version control and collaborative editing
- **Communication**: Real-time messaging with notification preferences
- **Analytics**: Custom reports with drill-down capabilities and data export

## 💡 Best Practices & Business Rules

1. **Always validate input** with comprehensive business rules and constraints
2. **Implement tenant isolation** in every database query and API endpoint
3. **Use proper HTTP status codes** with detailed error messages
4. **Apply role-based access control** with granular permissions
5. **Include audit trails** for all critical business operations
6. **Implement async processing** for heavy operations using Bull Queue
7. **Use real-time notifications** for time-sensitive business events
8. **Include proper logging** with correlation IDs and business context
9. **Implement caching strategies** for frequently accessed data
10. **Use transactions** for multi-step business operations
11. **Include comprehensive testing** with business scenario coverage
12. **Document business rules** clearly in code and API documentation
13. **Implement proper error handling** with business-friendly messages
14. **Use event-driven architecture** for loose coupling between modules
15. **Include performance monitoring** for business-critical operations

## 🔍 Code Review Checklist

Before suggesting code, ensure:
- [ ] **Business Logic**: Follows domain-specific business rules and workflows
- [ ] **Multi-tenancy**: Implements proper tenant isolation and context
- [ ] **Security**: Includes authentication, authorization, and data protection
- [ ] **Performance**: Meets sub-200ms response time requirements
- [ ] **Scalability**: Supports 10,000+ concurrent users
- [ ] **Testing**: Includes comprehensive unit, integration, and E2E tests
- [ ] **Documentation**: Provides clear API and business logic documentation
- [ ] **Error Handling**: Implements proper error handling with business context
- [ ] **Logging**: Includes structured logging with correlation IDs
- [ ] **Monitoring**: Includes health checks and performance metrics
- [ ] **Compliance**: Follows GDPR, HIPAA, and SOC 2 requirements
- [ ] **Integration**: Supports third-party integrations and webhooks
- [ ] **Real-time**: Implements WebSocket for live updates where needed
- [ ] **Background Jobs**: Uses Bull Queue for async processing
- [ ] **Caching**: Implements appropriate caching strategies

## 📈 Success Metrics & KPIs

**Technical Metrics:**
- **Response Time**: < 200ms for 95% of requests
- **Availability**: 99.9% uptime
- **Code Coverage**: > 80% for unit tests
- **Concurrent Users**: Support 10,000+ users
- **Security**: Zero critical vulnerabilities

**Business Metrics:**
- **User Adoption**: > 90% active user engagement
- **Feature Completeness**: 100% of core business features
- **Integration Success**: > 95% successful third-party integrations
- **Customer Satisfaction**: > 4.5/5 rating
- **Time to Market**: Delivery within timeline

---

**Remember**: This is an enterprise-grade resource management platform serving multiple organizations. Every code suggestion must consider business domain complexity, multi-tenancy, security, performance, and scalability. Always provide production-ready code that follows both technical and business requirements.