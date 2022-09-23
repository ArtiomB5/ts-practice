type Modifier = 'create' | 'read' | 'update';

type UserRoles = {
    customer?: Modifier
    projects?: Modifier
    adminPanel?: Modifier
}

type ModifierToAccess<Type> = {
   +readonly [Property in keyof Type as `canAccess${string & Property}`]-?: boolean;
}

type UserAccessType = ModifierToAccess<UserRoles>