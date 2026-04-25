

ECS => Create New Cluster With Farget Only => Click On Create Simple

Task Defination => Create New => "family name","AWS FARGATE tick-mark","CPU and Memory As Per Requirement",["Task Role","Task Execution Role" if we don't have role then create from IAM]

CREATE TASK ROLE => IAM => ROLES => CRETE ROLE => SERCH CONTAINER => Task Execution role for elastic container service => next => role name

CREATE SERVICE => Cluster => Select A Cluster => Create Service => NETWORKING => SELECT VPC => REMOVE PRIVATE ACCORDING TO REQUIREMENT => SUCURITY GROUP, LOAD BALACING ALB => LB NAME => TARGET GROUP => HEALTH CHECK ROUTE => CREATE






// AWS Task DEFINATION

{
    "taskDefinitionArn": "arn:aws:ecs:ap-south-1:673611059686:task-definition/kodr-3-insta-server-task:1",
    "containerDefinitions": [
        {
            "name": "kodr-express_fullstack-server",
            "image": "673611059686.dkr.ecr.ap-south-1.amazonaws.com/express_server:latest",
            "cpu": 0,
            "portMappings": [
                {
                    "containerPort": 4000,
                    "hostPort": 4000,
                    "protocol": "tcp",
                    "name": "kodr-insta-port",
                    "appProtocol": "http"
                }
            ],
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/kodr-3-insta-server-task",
                    "awslogs-create-group": "true",
                    "awslogs-region": "ap-south-1",
                    "awslogs-stream-prefix": "ecs"
                },
                "secretOptions": []
            },
            "systemControls": []
        }
    ],
    "family": "kodr-3-insta-server-task",
    "taskRoleArn": "arn:aws:iam::673611059686:role/kodr-task-role",
    "executionRoleArn": "arn:aws:iam::673611059686:role/kodr-task-role",
    "networkMode": "awsvpc",
    "revision": 1,
    "volumes": [],
    "status": "ACTIVE",
    "requiresAttributes": [
        {
            "name": "com.amazonaws.ecs.capability.logging-driver.awslogs"
        },
        {
            "name": "ecs.capability.execution-role-awslogs"
        },
        {
            "name": "com.amazonaws.ecs.capability.ecr-auth"
        },
        {
            "name": "com.amazonaws.ecs.capability.docker-remote-api.1.19"
        },
        {
            "name": "com.amazonaws.ecs.capability.task-iam-role"
        },
        {
            "name": "ecs.capability.execution-role-ecr-pull"
        },
        {
            "name": "com.amazonaws.ecs.capability.docker-remote-api.1.18"
        },
        {
            "name": "ecs.capability.task-eni"
        },
        {
            "name": "com.amazonaws.ecs.capability.docker-remote-api.1.29"
        }
    ],
    "placementConstraints": [],
    "compatibilities": [
        "EC2",
        "FARGATE",
        "MANAGED_INSTANCES"
    ],
    "runtimePlatform": {
        "cpuArchitecture": "X86_64",
        "operatingSystemFamily": "LINUX"
    },
    "requiresCompatibilities": [
        "FARGATE"
    ],
    "cpu": "512",
    "memory": "1024",
    "registeredAt": "2026-04-24T06:43:19.672Z",
    "registeredBy": "arn:aws:iam::673611059686:root",
    "enableFaultInjection": false,
    "tags": []
}