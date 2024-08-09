<Form name="Nextcloud" description="Foo bar baz qux" logoSrc="/nextcloud.svg">
  <Field title="Database" description="Select the database type">
    <Select
      name="dbType"
      defaultValue="mariadb"
      label="Database type"
      description="Select the database type"
    >
      <Option value="mariadb">MariaDB (recommended)</Option>
      <Option value="postgres">Postgres</Option>
    </Select>
  </Field>

  <Field
    title="Database password"
    description="The password for the Nextcloud database"
  >
    <TextInput name="dbPass" defaultValue="nextcloud" type="password" />
  </Field>

  <If advanced>
    <Field title="Use external database" description="Use an external database">
      <Switch name="useExternalDatabase" />
    </Field>

    <If condition="useExternalDatabase">
      <Field
        title="Database host"
        description="The host of the Nextcloud database"
      >
        <TextInput name="dbHost" />
      </Field>
    </If>

    <Field
      title="Database username"
      description="The username for the Nextcloud database"
    >
      <TextInput name="dbUser" defaultValue="nextcloud" />
    </Field>

    <Field
      title="Database name"
      description="The name of the Nextcloud database"
    >
      <TextInput name="dbName" defaultValue="nextcloud" />
    </Field>

    <If condition="dbType == 'mariadb'">
      <Field
        title="Use random MariaDB root password"
        description="It is recommended to use a random password for the database root user"
      >
        <Switch name="useRandomDbRootPass" defaultChecked />
      </Field>

      <If condition="!useRandomDbRootPass">
        <Field
          title="Database root password"
          description="The root password for the database"
        >
          <TextInput name="dbRootPass" type="password" />
        </Field>
      </If>
    </If>
  </If>
</Form>;
