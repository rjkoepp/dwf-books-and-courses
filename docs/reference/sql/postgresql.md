---
title: PostgreSQL Reference
hide_title: false
sidebar_label: PostgreSQL
description: A collection of reference points for PostgreSQL
draft: false
tags: [sql]
keywords: [sql]
image: https://github.com/farlowdw.png
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [PostgreSQL Functions](https://www.postgresqltutorial.com/postgresql-functions/)

### Aggregates

See the [official docs](https://www.postgresql.org/docs/current/functions-aggregate.html) for more on all functions in this category. The table immediately below provides you the most commonly used PostgreSQL functions as considred on PostgreSQL Tutorial. Links to these functions take you to the function's reference on the PostgreSQL Tutorial site. Underneath the table below is a reproduction of what currently exists in the Postgres docs in a more palatable form.

| Function | Description |
| :-- | :-- |
| [`COUNT()`](https://www.postgresqltutorial.com/postgresql-count-function/) | Count the number of rows in a table |
| [`AVG()`](https://www.postgresqltutorial.com/postgresql-avg-function/) | Calculate the average value of a set |
| [`SUM()`](https://www.postgresqltutorial.com/postgresql-sum-function/) | Calculate the sum of a set of values |
| [`MAX()`](https://www.postgresqltutorial.com/postgresql-max-function/) | Get the maximum value of a set |
| [`MIN()`](https://www.postgresqltutorial.com/postgresql-min-function/) | Get the minimum value of a set |
| [`STRING_AGG()`](https://www.postgresqltutorial.com/postgresql-aggregate-functions/postgresql-string_agg-function/) | Concatenate strings and place a separator between them |
| [`ARRAY_AGG`](https://www.postgresqltutorial.com/postgresql-aggregate-functions/postgresql-array_agg-function/) | Return an array from a set of input values |

The tables below all come from the Postgres docs.

- [General-Purpose Aggregate Functions](#general-purpose-aggregate-functions)
- [Aggregate Functions for Statistics](#aggregate-functions-for-statistics)
- [Ordered-Set Aggregate Functions](#ordered-set-aggregate-functions)
- [Hypothetical-Set Aggregate Functions](#hypothetical-set-aggregate-functions)
- [Grouping Operations](#grouping-operations)

#### General-Purpose Aggregate Functions 

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>array_agg ( anynonarray ) → anyarray</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Collects all the input values, including nulls, into an array.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>No</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>array_agg ( anyarray ) → anyarray</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Concatenates all the input arrays into an array of one higher dimension. (The inputs must all have the same dimensionality, and cannot be empty or null.)</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>No</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>avg ( smallint ) → numeric</code><br/><code>avg ( integer ) → numeric</code><br/><code>avg ( bigint ) → numeric</code><br/><code>avg ( numeric ) → numeric</code><br/><code>avg ( real ) → double precision</code><br/><code>avg ( double precision ) → double precision</code><br/><code>avg ( interval ) → interval</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the average (arithmetic mean) of all the non-null input values.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>bit_and ( smallint ) → smallint</code><br/><code>bit_and ( integer ) → integer</code><br/><code>bit_and ( bigint ) → bigint</code><br/><code>bit_and ( bit ) → bit</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the bitwise AND of all non-null input values.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>bit_or ( smallint ) → smallint</code><br/><code>bit_or ( integer ) → integer</code><br/><code>bit_or ( bigint ) → bigint</code><br/><code>bit_or ( bit ) → bit</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the bitwise OR of all non-null input values.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>bool_and ( boolean ) → boolean</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns true if all non-null input values are true, otherwise false.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>bool_or ( boolean ) → boolean</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns true if any non-null input value is true, otherwise false.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>count ( * ) → bigint</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the number of input rows.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>count ( "any" ) → bigint</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the number of input rows in which the input value is not null.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>every ( boolean ) → boolean</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>This is the SQL standard's equivalent to <code>bool_and</code>.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>json_agg ( anyelement ) → json</code><br/><code>jsonb_agg ( anyelement ) → jsonb</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Collects all the input values, including nulls, into a JSON array. Values are converted to JSON as per <code>to_json</code> or <code>to_jsonb</code>.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>No</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>json_object_agg ( key "any", value "any" ) → json</code><br/><code>jsonb_object_agg ( key "any", value "any" ) → jsonb</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Collects all the key/value pairs into a JSON object. Key arguments are coerced to text; value arguments are converted as per <code>to_json</code> or <code>to_jsonb</code>. Values can be null, but not keys.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>No</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>max ( <strong><em>see text</em></strong> ) → <strong><em>same as input type</em></strong></code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the maximum of the non-null input values. Available for any numeric, string, date/time, or enum type, as well as <code>inet</code>, <code>interval</code>, <code>money</code>, <code>oid</code>, <code>pg_lsn</code>, <code>tid</code>, and arrays of any of these types.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>min ( <strong><em>see text</em></strong> ) → <strong><em>same as input type</em></strong></code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the minimum of the non-null input values. Available for any numeric, string, date/time, or enum type, as well as <code>inet</code>, <code>interval</code>, <code>money</code>, <code>oid</code>, <code>pg_lsn</code>, <code>tid</code>, and arrays of any of these types.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>string_agg ( <em>value</em> text, <em>delimiter</em> text ) → text</code><br/><code>string_agg ( <em>value</em> bytea, <em>delimiter</em> bytea ) → bytea</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Concatenates the non-null input values into a string. Each value after the first is preceded by the corresponding <code><em>delimiter</em></code> (if it's not null).</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>No</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>sum ( smallint ) → bigint</code><br/><code>sum ( integer ) → bigint</code><br/><code>sum ( bigint ) → numeric</code><br/><code>sum ( numeric ) → numeric</code><br/><code>sum ( real ) → real</code><br/><code>sum ( double precision ) → double precision</code><br/><code>sum ( interval ) → interval</code><br/><code>sum ( money ) → money</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the sum of the non-null input values.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>xmlagg ( xml ) → xml</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Concatenates the non-null XML input values (see <a href="https://www.postgresql.org/docs/current/functions-xml.html#FUNCTIONS-XML-XMLAGG">Section 9.15.1.7</a>).</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>No</td>
  </tr>
  <br/>
</table>

<br/>

#### Aggregate Functions for Statistics

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>corr ( <em>Y</em> double precision, <em>X</em> double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the correlation coefficient.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>covar_pop ( <em>Y</em> double precision, <em>X</em> double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the population covariance.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>covar_samp ( <em>Y</em> double precision, <em>X</em> double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the sample covariance.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>regr_avgx ( <em>Y</em> double precision, <em>X</em> double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the average of the independent variable, <code>sum(<em>X</em>)/<em>N</em></code>.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>regr_avgy ( <em>Y</em> double precision, <em>X</em> double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the average of the dependent variable, <code>sum(<em>Y</em>)/<em>N</em></code>.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>regr_count ( <em>Y</em> double precision, <em>X</em> double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the number of rows in which both inputs are non-null.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>regr_intercept ( <em>Y</em> double precision, <em>X</em> double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the y-intercept of the least-squares-fit linear equation determined by the (<code><em>X, Y</em></code>) pairs.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>regr_r2 ( <em>Y</em> double precision, <em>X</em> double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the square of the correlation coefficient.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>regr_slope ( <em>Y</em> double precision, <em>X</em> double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the slope of the least-squares-fit linear equation determined by the (<code><em>X, Y</em></code>) pairs.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>regr_sxx ( <em>Y</em> double precision, <em>X</em> double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the "sum of squares" of the independent variable, <code>sum(<em>X</em>^2) - sum(<em>X</em>)^2/N</code>.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>regr_sxy ( <em>Y</em> double precision, <em>X</em> double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the "sum of products" of independent times dependent variables, <code>sum(<em>X*Y</em>) - sum(<em>X</em>) * sum(<em>Y</em>)/<em>N</em></code>.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>regr_syy ( <em>Y</em> double precision, <em>X</em> double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the "sum of squares" of the dependent variable, sum(<em>Y</em>^2) - sum(<em>Y</em>)^2/<em>N</em>.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>stddev ( <strong><em>numeric_type</em></strong> ) → double precision</code> for <code>real</code> or <code>double precision</code>, otherwise <code>numeric</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>This is a historical alias for <code>stddev_samp</code>.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>stddev_pop ( <strong><em>numeric_type</em></strong> ) → double precision</code> for <code>real</code> or <code>double precision</code>, otherwise <code>numeric</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the population standard deviation of the input values.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>stddev_samp ( <strong><em>numeric_type</em></strong> ) → double precision</code> for <code>real</code> or <code>double precision</code>, otherwise <code>numeric</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the sample standard deviation of the input values.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>variance ( <strong><em>numeric_type</em></strong> ) → double precision</code> for <code>real</code> or <code>double precision</code>, otherwise <code>numeric</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>This is a historical alias for <code>var_samp</code>.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>var_pop ( <strong><em>numeric_type</em></strong> ) → double precision</code> for <code>real</code> or <code>double precision</code>, otherwise <code>numeric</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the population variance of the input values (square of the population standard deviation).</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>var_samp ( <strong><em>numeric_type</em></strong> ) → double precision</code> for <code>real</code> or <code>double precision</code>, otherwise <code>numeric</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the sample variance of the input values (square of the sample standard deviation).</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>Yes</td>
  </tr>
  <br/>
</table>

<br/>

#### Ordered-Set Aggregate Functions

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>mode () WITHIN GROUP ( ORDER BY anyelement ) → anyelement</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the <em>mode</em>, the most frequent value of the aggregated argument (arbitrarily choosing the first one if there are multiple equally-frequent values). The aggregated argument must be of a sortable type.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>No</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>percentile_cont ( <em>fraction</em> double precision ) WITHIN GROUP ( ORDER BY double precision ) → double precision</code><br/><code>percentile_cont ( <em>fraction</em> double precision ) WITHIN GROUP ( ORDER BY interval ) → interval</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the <em>continuous percentile</em>, a value corresponding to the specified <code><em>fraction</em></code> within the ordered set of aggregated argument values. This will interpolate between adjacent input items if needed.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>No</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>percentile_cont ( <em>fractions</em> double precision[] ) WITHIN GROUP ( ORDER BY double precision ) → double precision[]</code><br/><code>percentile_cont ( <em>fractions</em> double precision[] ) WITHIN GROUP ( ORDER BY interval ) → interval[]</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes multiple continuous percentiles. The result is an array of the same dimensions as the <code><em>fractions</em></code> parameter, with each non-null element replaced by the (possibly interpolated) value corresponding to that percentile.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>No</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>percentile_disc ( <em>fraction</em> double precision ) WITHIN GROUP ( ORDER BY anyelement ) → anyelement</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the <em>discrete percentile</em>, the first value within the ordered set of aggregated argument values whose position in the ordering equals or exceeds the specified <code><em>fraction</em></code>. The aggregated argument must be of a sortable type.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>No</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>percentile_disc ( <em>fractions</em> double precision[] ) WITHIN GROUP ( ORDER BY anyelement ) → anyarray</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes multiple discrete percentiles. The result is an array of the same dimensions as the <code><em>fractions</em></code> parameter, with each non-null element replaced by the input value corresponding to that percentile. The aggregated argument must be of a sortable type.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>No</td>
  </tr>
  <br/>
</table>

<br/>

#### Hypothetical-Set Aggregate Functions

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>rank ( <strong><em>args</em></strong> ) WITHIN GROUP ( ORDER BY <strong><em>sorted_args</em></strong> ) → bigint</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the rank of the hypothetical row, with gaps; that is, the row number of the first row in its peer group.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>No</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>dense_rank ( <strong><em>args</em></strong> ) WITHIN GROUP ( ORDER BY <strong><em>sorted_args</em></strong> ) → bigint</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the rank of the hypothetical row, without gaps; this function effectively counts peer groups.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>No</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>percent_rank ( <strong><em>args</em></strong> ) WITHIN GROUP ( ORDER BY <strong><em>sorted_args</em></strong> ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the relative rank of the hypothetical row, that is (rank - 1) / (total rows - 1). The value thus ranges from 0 to 1 inclusive.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>No</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>cume_dist ( args ) WITHIN GROUP ( ORDER BY sorted_args ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the cumulative distribution, that is (number of rows preceding or peers with hypothetical row) / (total rows). The value thus ranges from 1/<code><em>N</em></code> to 1.</td>
  </tr>
  <tr>
    <td><strong>Partial mode</strong></td>
    <td>No</td>
  </tr>
  <br/>
</table>

<br/>

#### Grouping Operations

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>GROUPING ( <strong><em>group_by_expression(s)</em></strong> ) → integer</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns a bit mask indicating which <code>GROUP BY</code> expressions are not included in the current grouping set. Bits are assigned with the rightmost argument corresponding to the least-significant bit; each bit is 0 if the corresponding expression is included in the grouping criteria of the grouping set generating the current result row, and 1 if it is not included.</td>
  </tr>
  <br/>
</table>

<br/>

### Strings

See the [official docs](https://www.postgresql.org/docs/current/functions-string.html) for more on all functions in this category. The table immediately below provides you the most commonly used PostgreSQL functions as considred on PostgreSQL Tutorial. Links to these functions take you to the function's reference on the PostgreSQL Tutorial site. Underneath the table below is a reproduction of what currently exists in the Postgres docs in a more palatable form.

| Function | <div style={{width:'300px'}}>Description</div> | Example | <div style={{width:'300px'}}>Result</div> |
| :-- | :-- | :-- | :-- |
| [`ASCII`](https://www.postgresqltutorial.com/postgresql-ascii/) | Return the ASCII code value of a character or Unicode code point of a UTF8 character | `ASCII('A')` | `65` |
| [`CHR`](https://www.postgresqltutorial.com/postgresql-chr/) | Convert an ASCII code to a character or a Unicode code point to a UTF8 character | `CHR(65)` | `'A'` |
| [`CONCAT`](https://www.postgresqltutorial.com/postgresql-concat-function/) | Concatenate two or more strings into one | `CONCAT('A','B','C')` | `'ABC'` |
| [`CONCAT_WS`](https://www.postgresqltutorial.com/postgresql-concat-function/) | Concatenate strings with a separator | `CONCAT_WS(',','A','B','C')` | `'A,B,C'` |
| [`FORMAT`](https://www.postgresqltutorial.com/postgresql-format/) | Format arguments based on a format string | `FORMAT('Hello %s','PostgreSQL')` | `'Hello PostgreSQL'` |
| [`INITCAP`](https://www.postgresqltutorial.com/postgresql-letter-case-functions/) | Convert words in a string to title case | `INITCAP('hI tHERE')` | `Hi There` |
| [`LEFT`](https://www.postgresqltutorial.com/postgresql-left/) | Return the first `n` character in a string | `LEFT('ABC',1)` | `'A'` |
| [`LENGTH`](https://www.postgresqltutorial.com/postgresql-length-function/) | Return the number of characters in a string | `LENGTH('ABC')` | `3` |
| [`LOWER`](https://www.postgresqltutorial.com/postgresql-letter-case-functions/) | Convert a string to lowercase | `LOWER('hI tHERE')` | `'hi there'` |
| [`LPAD`](https://www.postgresqltutorial.com/postgresql-lpad/) | Pad on the left a a string with a character to a certain length | `LPAD('123′, 5, '00')` | `'00123'` |
| [`LTRIM`](https://www.postgresqltutorial.com/postgresql-trim-function/) | Remove the longest string that contains specified characters from the left of the input string | `LTRIM('00123')` | `'123'` |
| [`MD5`](https://www.postgresqltutorial.com/postgresql-md5/) | Return MD5 hash of a string in hexadecimal | `MD5('PostgreSQL MD5')` | `f78fdb18bf39b23d42313edfaf7e0a44` |
| [`POSITION`](https://www.postgresqltutorial.com/postgresql-position/) | Return the location of a substring in a string | `POSTION('B' in 'A B C')` | `3` |
| [`REGEXP_MATCHES`](https://www.postgresqltutorial.com/postgresql-regexp_matches/) | Match a POSIX regular expression against a string and returns the matching substrings | `SELECT REGEXP_MATCHES('ABC', '^(A)(..)$', 'g');` | `{A,BC}` |
| [`REGEXP_REPLACE`](https://www.postgresqltutorial.com/regexp_replace/) | Replace substrings that match a POSIX regular expression by a new substring | `REGEXP_REPLACE('John Doe','(.*) (.*)','\2, \1′);` | `'Doe, John'` |
| `REPEAT` | Repeat string the specified number of times | `REPEAT('*', 5)` | `'*****'` |
| [`REPLACE`](https://www.postgresqltutorial.com/postgresql-replace/) | Replace all occurrences in a string of substring from with substring to | `REPLACE('ABC','B','A')` | `'AAC'` |
| `REVERSE` | Return reversed string | `REVERSE('ABC')` | `'CBA'` |
| [`RIGHT`](https://www.postgresqltutorial.com/postgresql-right/) | Return last `n` characters in the string. When `n` is negative, return all but first `|n|` characters | `RIGHT('ABC', 2)` | `'BC'` |
| `RPAD` | Pad on the right of a string with a character to a certain length | `RPAD('ABC', 6, 'xo')` | `'ABCxox'` |
| [`RTRIM`](https://www.postgresqltutorial.com/postgresql-trim-function/) | Remove the longest string that contains specified characters from the right of the input string | `RTRIM('abcxxzx', 'xyz')` | `'abc'` |
| [`SPLIT_PART`](https://www.postgresqltutorial.com/postgresql-split_part/) | Split a string on a specified delimiter and return nth substring | `SPLIT_PART('2017-12-31′,'-',2)` | `'12'` |
| [`SUBSTRING`](https://www.postgresqltutorial.com/postgresql-substring/) | Extract a substring from a string | `SUBSTRING('ABC',1,1)` | `'A'` |
| [`TRIM`](https://www.postgresqltutorial.com/postgresql-trim-function/) | Remove the longest string that contains specified characters from the left, right or both of the input string | `TRIM(' ABC  ')` | `'ABC'` |
| [`UPPER`](https://www.postgresqltutorial.com/postgresql-letter-case-functions/) | Convert a string to uppercase | `UPPER('hI tHERE')` | `'HI THERE'` |
| [`TO_CHAR`](https://www.postgresqltutorial.com/postgresql-to_char/) | Converts a timestamp, an interval, an integer, a double precision, or a numeric value to a string | ``TO_CHAR(TIMESTAMP '2017-08-18 22:30:59', 'HH24:MI:SS')`` | `22:30:59` |
| [`TO_NUMBER`](https://www.postgresqltutorial.com/postgresql-to_number/) | Converts a character string to a numeric value | `TO_NUMBER('12,345.6-', '99G999D9S')` | `-12345.6` |

What currently exists in the Postgres docs is listed below.

- [SQL String Functions and Operators](#sql-string-functions-and-operators)
- [Other String Functions](#other-string-functions)


#### SQL String Functions and Operators

<table border="1" width="100%" style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>text || text → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Concatenates the two strings..</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>'Post' || 'greSQL' → PostgreSQL</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border="1" width="100%" style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>text || anynonarray → text</code><br /><code>anynonarray || text → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Converts the non-string input to text, then concatenates the two strings. (The non-string input cannot be of an array type, because that would create ambiguity with the array <code>||</code> operators. If you want to concatenate an array's text equivalent, cast it to text explicitly.).</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>'Value: ' || 42 → Value: 42</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>text IS [NOT] [<em>form</em>] NORMALIZED → boolean</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Checks whether the string is in the specified Unicode normalization form. The optional form key word specifies the form: <code>NFC</code> (the default), <code>NFD</code>, <code>NFKC</code>, or <code>NFKD</code>. This expression can only be used when the server encoding is <code>UTF8</code>. Note that checking for normalization using this expression is often faster than normalizing possibly already normalized strings.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>actualExamples</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>bit_length ( text ) → integer</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns number of bits in the string (8 times the <code>octet_length</code>)</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>bit_length('jose') → 32</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>char_length ( text ) → integer</code><br /><code>character_length ( text ) → integer</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns number of characters in the string</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>char_length('josé') → 4</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>lower ( text ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Converts the string to all lower case, according to the rules of the database's locale</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>lower('TOM') → tom</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>normalize ( text [, <em>form</em> ] ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Converts the string to the specified Unicode normalization form. The optional form key word specifies the form: <code>NFC</code> (the default), <code>NFD</code>, <code>NFKC</code>, or <code>NFKD</code>. This function can only be used when the server encoding is <code>UTF8</code>.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>normalize(U&'\0061\0308bc', NFC) → U&'\00E4bc'</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>octet_length ( text ) → integer</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns number of bytes in the string</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>octet_length('josé') → 5</code> (if server encoding is UTF8)</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>octet_length ( character ) → integer</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns number of bytes in the string. Since this version of the function accepts type character directly, it will not strip trailing spaces</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>octet_length('abc '::character(4)) → 4</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>overlay ( <em>string</em> text PLACING <em>newsubstring</em> text FROM <em>start</em> integer [ FOR <em>count</em> integer ] ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Replaces the substring of <code><em>string</em></code> that starts at the <code><em>start</em></code>'th character and extends for <code><em>count</em></code> characters with <code><em>newsubstring</em></code>. If <code><em>count</em></code> is omitted, it defaults to the length of <code><em>newsubstring</em></code>.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>overlay('Txxxxas' placing 'hom' from 2 for 4) → Thomas</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>position ( <em>substring</em> text IN <em>string</em> text ) → integer</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns starting index of specified <code><em>substring</em></code> within <code><em>string</em></code>, or zero if it's not present.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>position('om' in 'Thomas') → 3</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>substring ( <em>string</em> text [ FROM <em>start</em> integer ] [ FOR <em>count</em> integer ] ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Extracts the substring of <code><em>string</em></code> starting at the <code><em>start</em></code>'th character if that is specified, and stopping after <code><em>count</em></code> characters if that is specified. Provide at least one of <code><em>start</em></code> and <code><em>count</em></code>.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>substring('Thomas' from 2 for 3) → hom</code><br/><code>substring('Thomas' from 3) → omas</code><br/><code>substring('Thomas' for 2) → Th</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>substring ( <em>string</em> text FROM <em>pattern</em> text ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Extracts substring matching POSIX regular expression; see <a href="https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-POSIX-REGEXP">Section 9.7.3</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>substring('Thomas' from '...$') → mas</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>substring ( <em>string</em> text FROM <em>pattern</em> text FOR <em>escape</em> text ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Extracts substring matching SQL regular expression; see <a href="https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-SIMILARTO-REGEXP">Section 9.7.2</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>substring('Thomas' from '%#"o_a#"_' for '#') → oma</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>trim ( [ LEADING | TRAILING | BOTH ] [ <em>characters</em> text ] FROM <em>string</em> text ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Removes the longest string containing only characters in <code><em>characters</em></code> (a space by default) from the start, end, or both ends (<code>BOTH</code> is the default) of <code><em>string</em></code>.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>trim(both 'xyz' from 'yxTomxx') → Tom</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>trim ( [ LEADING | TRAILING | BOTH ] [ FROM ] <em>string</em> text [, <em>characters</em> text ] ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>This is a non-standard syntax for <code>trim()</code>.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>trim(both from 'yxTomxx', 'xyz') → Tom</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>upper ( text ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Converts the string to all upper case, according to the rules of the database's locale.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>upper('tom') → TOM</code></td>
  </tr>
  <br/>
</table>

<br/>

#### Other String Functions

Additional string manipulation functions are available and are listed in the table below. Some of them are used internally to implement the SQL-standard string functions listed in the table above.

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>ascii ( text ) → integer</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns the numeric code of the first character of the argument. In UTF8 encoding, returns the Unicode code point of the character. In other multibyte encodings, the argument must be an ASCII character.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>ascii('x') → 120</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>btrim ( <em>string</em> text [, <em>characters</em> text ] ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Removes the longest string containing only characters in <code><em>characters</em></code> (a space by default) from the start and end of <code><em>string</em></code>.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>btrim('xyxtrimyyx', 'xyz') → trim</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>chr ( integer ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns the character with the given code. In UTF8 encoding the argument is treated as a Unicode code point. In other multibyte encodings the argument must designate an ASCII character. <code>chr(0)</code> is disallowed because text data types cannot store that character.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>chr(65) → A</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>concat ( <em>val1</em> "any" [, <em>val2</em> "any" [, ...] ] ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Concatenates the text representations of all the arguments. NULL arguments are ignored.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>concat('abcde', 2, NULL, 22) → abcde222</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>concat_ws ( <em>sep</em> text, <em>val1</em> "any" [, <em>val2</em> "any" [, ...] ] ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Concatenates all but the first argument, with separators. The first argument is used as the separator string, and should not be NULL. Other NULL arguments are ignored.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>concat_ws(',', 'abcde', 2, NULL, 22) → abcde,2,22</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>format ( <em>formatstr</em> text [, <em>formatarg</em> "any" [, ...] ] ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Formats arguments according to a format string; see <a href="https://www.postgresql.org/docs/current/functions-string.html#FUNCTIONS-STRING-FORMAT">Section 9.4.1</a>. This function is similar to the C function <code>sprintf</code>.</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>initcap ( text ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Converts the first letter of each word to upper case and the rest to lower case. Words are sequences of alphanumeric characters separated by non-alphanumeric characters.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>initcap('hi THOMAS') → Hi Thomas</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>left ( <em>string</em> text, <em>n</em> integer ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns first <code><em>n</em></code> characters in the string, or when <code><em>n</em></code> is negative, returns all but last <code>|<em>n</em>|</code> characters.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>left('abcde', 2) → ab</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>length ( text ) → integer</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns the number of characters in the string.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>length('jose') → 4</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>lpad ( <em>string</em> text, <em>length</em> integer [, <em>fill</em> text ] ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Extends the <code><em>string</em></code> to length <code><em>length</em></code> by prepending the characters <code><em>fill</em></code> (a space by default). If the <code><em>string</em></code> is already longer than <code><em>length</em></code> then it is truncated (on the right).</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>lpad('hi', 5, 'xy') → xyxhi</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>ltrim ( <em>string</em> text [, <em>characters</em> text ] ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Removes the longest string containing only characters in <code><em>characters</em></code> (a space by default) from the start of <code><em>string</em></code>.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>ltrim('zzzytest', 'xyz') → test</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>md5 ( text ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Computes the MD5 <a href="https://www.postgresql.org/docs/current/functions-binarystring.html#FUNCTIONS-HASH-NOTE">hash</a> of the argument, with the result written in hexadecimal.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>md5('abc') → 900150983cd24fb0​d6963f7d28e17f72</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>parse_ident ( <em>qualified_identifier</em> text [, <em>strict_mode</em> boolean DEFAULT true ] ) → text[]</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Splits <code><em>qualified_identifier</em></code> into an array of identifiers, removing any quoting of individual identifiers. By default, extra characters after the last identifier are considered an error; but if the second parameter is <code>false</code>, then such extra characters are ignored. (This behavior is useful for parsing names for objects like functions.) Note that this function does not truncate over-length identifiers. If you want truncation you can cast the result to <code>name[]</code>.</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>pg_client_encoding ( ) → name</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns current client encoding name.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>pg_client_encoding() → UTF8</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>quote_ident ( text ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns the given string suitably quoted to be used as an identifier in an SQL statement string. Quotes are added only if necessary (i.e., if the string contains non-identifier characters or would be case-folded). Embedded quotes are properly doubled. See also <a href="https://www.postgresql.org/docs/current/plpgsql-statements.html#PLPGSQL-QUOTE-LITERAL-EXAMPLE">Example 42.1</a>.</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>quote_literal ( text ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns the given string suitably quoted to be used as a string literal in an SQL statement string. Embedded single-quotes and backslashes are properly doubled. Note that <code>quote_literal</code> returns null on null input; if the argument might be null, <code>quote_nullable</code> is often more suitable. See also <a href="https://www.postgresql.org/docs/current/plpgsql-statements.html#PLPGSQL-QUOTE-LITERAL-EXAMPLE">Example 42.1</a>.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>quote_literal(E'O\'Reilly') → 'O''Reilly'</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>quote_literal ( anyelement ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Converts the given value to text and then quotes it as a literal. Embedded single-quotes and backslashes are properly doubled.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>quote_literal(42.5) → '42.5'</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>quote_nullable ( text ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns the given string suitably quoted to be used as a string literal in an SQL statement string; or, if the argument is null, returns NULL. Embedded single-quotes and backslashes are properly doubled. See also <a href="https://www.postgresql.org/docs/current/plpgsql-statements.html#PLPGSQL-QUOTE-LITERAL-EXAMPLE">Example 42.1</a>.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>quote_nullable(NULL) → NULL</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>quote_nullable ( anyelement ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Converts the given value to text and then quotes it as a literal; or, if the argument is null, returns <code>NULL</code>. Embedded single-quotes and backslashes are properly doubled.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>quote_nullable(42.5) → '42.5'</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>regexp_match ( string text, pattern text [, flags text ] ) → text[]</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns captured substring(s) resulting from the first match of a POSIX regular expression to the <code><em>string</em></code>; see <a href="https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-POSIX-REGEXP">Section 9.7.3</a>.</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>regexp_matches ( <em>string</em> text, <em>pattern</em> text [, <em>flags</em> text ] ) → setof text[]</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns captured substring(s) resulting from matching a POSIX regular expression to the <code><em>string</em></code>; see <a href="https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-POSIX-REGEXP">Section 9.7.3</a>.</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>regexp_replace ( <em>string</em> text, <em>pattern</em> text, <em>replacement</em> text [, <em>flags</em> text ] ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Replaces substring(s) matching a POSIX regular expression; see <a href="https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-POSIX-REGEXP">Section 9.7.3</a>.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>regexp_replace('Thomas', '.[mN]a.', 'M') → ThM</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>regexp_split_to_array ( <em>string</em> text, pattern text [, <em>flags</em> text ] ) → text[]</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Splits <code><em>string</em></code> using a POSIX regular expression as the delimiter; see <a href="https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-POSIX-REGEXP">Section 9.7.3</a>.</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>regexp_split_to_table ( <em>string</em> text, pattern text [, <em>flags</em> text ] ) → setof text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Splits string using a POSIX regular expression as the delimiter; see <a href="https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-POSIX-REGEXP">Section 9.7.3</a>.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>regexp_split_to_table('hello world', '\s+') → hello world</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>repeat ( <em>string</em> text, <em>number</em> integer ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Repeats <code><em>string</em></code> the specified <code><em>number</em></code> of times.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>repeat('Pg', 4) → PgPgPgPg</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>replace ( <em>string</em> text, <em>from</em> text, <em>to</em> text ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Replaces all occurrences in <code><em>string</em></code> of substring <code><em>from</em></code> with substring <code><em>to</em></code>.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>replace('abcdefabcdef', 'cd', 'XX') → abXXefabXXef</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>reverse ( text ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Reverses the order of the characters in the string.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>reverse('abcde') → edcba</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>right ( <em>string</em> text, <em>n</em> integer ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns last <code><em>n</em></code> characters in the string, or when <code><em>n</em></code> is negative, returns all but first <code>|<em>n</em>|</code> characters.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>right('abcde', 2) → de</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>rpad ( <em>string</em> text, <em>length</em> integer [, <em>fill</em> text ] ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Extends the <code><em>string</em></code> to length <code><em>length</em></code> by appending the characters <code><em>fill</em></code> (a space by default). If the <code><em>string</em></code> is already longer than <code><em>length</em></code> then it is truncated.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>rpad('hi', 5, 'xy') → hixyx</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>rtrim ( <em>string</em> text [, <em>characters</em> text ] ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Removes the longest string containing only characters in <code><em>characters</em></code> (a space by default) from the end of <code><em>string</em></code>.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>rtrim('testxxzx', 'xyz') → test</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>split_part ( <em>string</em> text, <em>delimiter</em> text, <em>n</em> integer ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Splits <code><em>string</em></code> at occurrences of <code><em>delimiter</em></code> and returns the <code><em>n</em></code>'th field (counting from one).</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>split_part('abc~@~def~@~ghi', '~@~', 2) → def</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>strpos ( <em>string</em> text, <em>substring</em> text ) → integer</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns starting index of specified <code><em>substring</em></code> within <code><em>string</em></code>, or zero if it's not present. (Same as <code>position(<em>substring</em> in <em>string</em>)</code>, but note the reversed argument order.)</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>strpos('high', 'ig') → 2</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>substr ( <em>string</em> text, <em>start</em> integer [, <em>count</em> integer ] ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Extracts the substring of <code><em>string</em></code> starting at the <code><em>start</em></code>'th character, and extending for <code><em>count</em></code> characters if that is specified. (Same as <code>substring(<em>string</em> from <em>start</em> for <em>count</em>)</code>.)</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>substr('alphabet', 3) → phabet</code><br/><code>substr('alphabet', 3, 2) → ph</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>starts_with ( <em>string</em> text, <em>prefix</em> text ) → boolean</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns true if <code><em>string</em></code> starts with <code><em>prefix</em></code>.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>starts_with('alphabet', 'alph') → t</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>to_ascii ( <em>string</em> text ) → text</code><br/><code>to_ascii ( <em>string</em> text, <em>encoding</em> name ) → text</code><br/><code>to_ascii ( <em>string</em> text, <em>encoding</em> integer ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Converts <code><em>string</em></code> to ASCII from another encoding, which may be identified by name or number. If <code><em>encoding</em></code> is omitted the database encoding is assumed (which in practice is the only useful case). The conversion consists primarily of dropping accents. Conversion is only supported from <code>LATIN1</code>, <code>LATIN2</code>, <code>LATIN9</code>, and <code>WIN1250</code> encodings. (See the <a href="https://www.postgresql.org/docs/current/unaccent.html">unaccent</a> module for another, more flexible solution.)</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>to_ascii('Karél') → Karel</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>to_hex ( integer ) → text</code><br/><code>to_hex ( bigint ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Converts the number to its equivalent hexadecimal representation.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>to_hex(2147483647) → 7fffffff</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>translate ( <em>string</em> text, <em>from</em> text, <em>to</em> text ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Replaces each character in <code><em>string</em></code> that matches a character in the <code><em>from</em></code> set with the corresponding character in the <code><em>to</em></code> set. If <code><em>from</em></code> is longer than <code><em>to</em></code>, occurrences of the extra characters in <code><em>from</em></code> are deleted.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>translate('12345', '143', 'ax') → a2x5</code></td>
  </tr>
  <br/>
</table>

<br/>

### Math

See the [official docs](https://www.postgresql.org/docs/current/functions-math.html) for more on all functions in this category. The table immediately below provides you the most commonly used PostgreSQL functions as considred on PostgreSQL Tutorial. Links to these functions take you to the function's reference on the PostgreSQL Tutorial site. Underneath the table below is a reproduction of what currently exists in the Postgres docs in a more palatable form.

| Function | <div style={{width: '300px'}}>Description</div> | Example | Result |
| :-- | :-- | :-- | :-- |
| [`ABS`](https://www.postgresqltutorial.com/postgresql-abs/) | Calculate the absolute value of a number | `ABS(-10)` | `10` |
| `CBRT` | Calculate the cube root of a number | `CBRT(8)` | `2` |
| [`CEIL`](https://www.postgresqltutorial.com/postgresql-ceil/) | Round a number up to the nearest integer, which is greater than or equal to number | `CEIL(-12.8)` | `-12` |
| [`CEILING`](https://www.postgresqltutorial.com/postgresql-ceil/) | Same as CEIL | `example` | `result` |
| `DEGREES` | Convert radians to degrees | `DEGREES(0.8)` | `45.83662361` |
| `DIV` | Return the integer quotient of two numeric values | `DIV(8,3)` | `2` |
| `EXP` | Return the exponential value in scientific notation of a number | `EXP(1)` | `2.718281828` |
| [`FLOOR`](https://www.postgresqltutorial.com/postgresql-floor/) | Round a number down to the nearest integer, which is less than or equal to number | `FLOOR(10.6)` | `10` |
| `LN` | Return the natural logarithm of a numeric value | `LN(3)` | `1.098612289` |
| `LOG` | Return the base 10 logarithm of a numeric value | `LOG(1000)` | `3` |
| `LOG` | Return the logarithm of a numeric value to a specified base | `LOG(2, 64)` | `6` |
| [`MOD`](https://www.postgresqltutorial.com/postgresql-mod/) | Divide the first parameter by the second one and return the remainder | `MOD(10,4)` | `1` |
| `PI` | Return the value of PI | `PI()` | `3.141592654` |
| `POWER` | Raise a numeric value to the power of a second numeric value | `POWER(5, 3)` | `125` |
| `RADIANS` | Convert degrees to radians | `RADIANS(60)` | `1.047197551` |
| [`ROUND`](https://www.postgresqltutorial.com/postgresql-round/) | Round a number to the nearest integer or to a specified decimal places | `ROUND(10.3)` | `10` |
| `SCALE` | Return the number of decimal digits in the fractional part | `SCALE(1.234)` | `3` |
| `SIGN` | Return the sign (positive, negative) of a numeric value | `SIGN(-1)` | `-1` |
| `SQRT` | Return the square root of a numeric value | `SQRT(3.0)` | `1.732050808` |
| [`TRUNC`](https://www.postgresqltutorial.com/postgresql-trunc/) | Truncate a numeric value to a whole number of  to the specified decimal places | `TRUNC(12.3)` | `12` |
| `WIDTH_BUCKET` | Assign values to buckets in an equi-width histogram | | |
| `RANDOM` | Return a random number that ranges from `0` to `1` |  | `0.968435665` |

All tables below appear in the official Postgres docs.

- [Mathematical Operators](#mathematical-operators)
- [Mathematical Functions](#mathematical-functions)
- [Random Functions](#random-functions)
- [Trigonometric Functions](#trigonometric-functions)
- [Hyperbolic Functions](#hyperbolic-functions)

#### Mathematical Operators

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code><strong><em>numeric_type + numeric_type → numeric_type</em></strong></code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Addition</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>2 + 3 → 5</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code><strong><em>+ numeric_type → numeric_type</em></strong></code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Unary plus (no operation)</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>+ 3.5 → 3.5</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code><strong><em>numeric_type - numeric_type → numeric_type</em></strong></code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Subtraction</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>2 - 3 → -1</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code><strong><em>- numeric_type → numeric_type</em></strong></code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Negation</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>- (-4) → 4</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code><strong><em>numeric_type * numeric_type → numeric_type</em></strong></code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Multiplication</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>2 * 3 → 6</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code><strong><em>numeric_type / numeric_type → numeric_type</em></strong></code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Division (for integral types, division truncates the result towards zero)</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>5.0 / 2 → 2.5000000000000000</code><br/><code>5 / 2 → 2</code><br/><code>(-5) / 2 → -2</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code><strong><em>numeric_type % numeric_type → numeric_type</em></strong></code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Modulo (remainder); available for <code>smallint</code>, <code>integer</code>, <code>bigint</code>, and <code>numeric</code></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>5 % 4 → 1</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>numeric ^ numeric → numeric</code><br/><code>double precision ^ double precision → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Exponentiation (unlike typical mathematical practice, multiple uses of ^ will associate left to right)</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>2 ^ 3 → 8</code><br/><code>2 ^ 3 ^ 3 → 512</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>|/ double precision → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Square root</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>|/ 25.0 → 5</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>||/ double precision → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Cube root</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>||/ 64.0 → 4</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>bigint ! → numeric</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Factorial (deprecated, use <a href="https://www.postgresql.org/docs/current/functions-math.html#FUNCTION-FACTORIAL">factorial()</a> instead)</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>5 ! → 120</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>!! bigint → numeric</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Factorial as a prefix operator (deprecated, use <a href="https://www.postgresql.org/docs/current/functions-math.html#FUNCTION-FACTORIAL">factorial()</a> instead)</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>!! 5 → 120</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code><strong><em>@ numeric_type → numeric_type</em></strong></code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Absolute value</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>@ -5.0 → 5</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code><strong><em>integral_type & integral_type → integral_type</em></strong></code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Bitwise AND</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>91 & 15 → 11</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code><strong><em>integral_type | integral_type → integral_type</em></strong></code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Bitwise OR</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>32 | 3 → 35</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code><strong><em>integral_type # integral_type → integral_type</em></strong></code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Bitwise exclusive OR</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>17 # 5 → 20</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code><strong><em>~ integral_type → integral_type</em></strong></code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Bitwise NOT</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>~1 → -2</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code><strong><em>integral_type &lt;&lt;</em></strong> integer <strong><em>→ integral_type</em></strong></code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Bitwise shift left</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>1 &lt;&lt; 4 → 16</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code><strong><em>integral_type >></em></strong> integer <strong><em>→ integral_type</em></strong></code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Bitwise shift right</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>8 >> 2 → 2</code></td>
  </tr>
  <br/>
</table>

<br/>

#### Mathematical Functions 

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>abs ( <strong><em>numeric_type</em></strong> ) → <strong><em>numeric_type</em></strong></code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Absolute value</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>abs(-17.4) → 17.4</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>cbrt ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Cube root</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>cbrt(64.0) → 4</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>ceil ( numeric ) → numeric</code><br/><code>ceil ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Nearest integer greater than or equal to argument</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>ceil(42.2) → 43</code><br/><code>ceil(-42.8) → -42</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>ceiling ( numeric ) → numeric</code><br/><code>ceiling ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Nearest integer greater than or equal to argument (same as <code>ceil</code>)</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>ceiling(95.3) → 96</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>degrees ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Converts radians to degrees</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>degrees(0.5) → 28.64788975654116</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>div ( <em>y</em> numeric, <em>x</em> numeric ) → numeric</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Integer quotient of <code><em>y/x</em></code> (truncates towards zero)</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>div(9,4) → 2</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>exp ( numeric ) → numeric</code><br/><code>exp ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Exponential (<code>e</code> raised to the given power)</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>exp(1.0) → 2.7182818284590452</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>factorial ( bigint ) → numeric</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Factorial</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>factorial(5) → 120</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>floor ( numeric ) → numeric</code><br/><code>floor ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Nearest integer less than or equal to argument</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>floor(42.8) → 42</code><br/><code>floor(-42.8) → -43</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>gcd ( <strong><em>numeric_type</em></strong>, <strong><em>numeric_type</em></strong> ) → <strong><em>numeric_type</em></strong></code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Greatest common divisor (the largest positive number that divides both inputs with no remainder); returns 0 if both inputs are zero; available for <code>integer</code>, <code>bigint</code>, and <code>numeric</code></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>gcd(1071, 462) → 21</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>lcm ( <strong><em>numeric_type</em></strong>, <strong><em>numeric_type</em></strong> ) → <strong><em>numeric_type</em></strong></code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Least common multiple (the smallest strictly positive number that is an integral multiple of both inputs); returns 0 if either input is zero; available for <code>integer</code>, <code>bigint</code>, and <code>numeric</code></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>lcm(1071, 462) → 23562</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>ln ( numeric ) → numeric</code><br/><code>ln ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Natural logarithm</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>ln(2.0) → 0.6931471805599453</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>log ( numeric ) → numeric</code><br/><code>log ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Base 10 logarithm</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>log(100) → 2</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>log10 ( numeric ) → numeric</code><br/><code>log10 ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Base 10 logarithm (same as <code>log</code>)</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>log10(1000) → 3</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>log ( <em>b</em> numeric, <em>x</em> numeric ) → numeric</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Logarithm of <code><em>x</em></code> to base <code><em>b</em></code></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>log(2.0, 64.0) → 6.0000000000</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>min_scale ( numeric ) → integer</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Minimum scale (number of fractional decimal digits) needed to represent the supplied value precisely</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>min_scale(8.4100) → 2</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>mod ( <em>y</em> <strong><em>numeric_type</em></strong>, <em>x</em> <strong><em>numeric_type</em></strong> ) → numeric_type</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Remainder of <code><em>y/x</em></code>; available for <code>smallint</code>, <code>integer</code>, <code>bigint</code>, and <code>numeric</code></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>mod(9,4) → 1</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>pi ( ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Approximate value of π</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>pi() → 3.141592653589793</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>power ( a numeric, b numeric ) → numeric</code><br/><code>power ( a double precision, b double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td><code><em>a</em></code> raised to the power of <code><em>b</em></code></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>power(9, 3) → 729</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>radians ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Converts degrees to radians</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>radians(45.0) → 0.7853981633974483</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>round ( numeric ) → numeric</code><br/><code>round ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Rounds to nearest integer</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>round(42.4) → 42</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>round ( <em>v</em> numeric, <em>s</em> integer ) → numeric</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Rounds <code><em>v</em></code> to <code><em>s</em></code> decimal places</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>round(42.4382, 2) → 42.44</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>scale ( numeric ) → integer</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Scale of the argument (the number of decimal digits in the fractional part)</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>scale(8.4100) → 4</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>sign ( numeric ) → numeric</code><br/><code>sign ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Sign of the argument (-1, 0, or +1)</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>sign(-8.4) → -1</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>sqrt ( numeric ) → numeric</code><br/><code>sqrt ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Square root</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>sqrt(2) → 1.4142135623730951</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>trim_scale ( numeric ) → numeric</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Reduces the value's scale (number of fractional decimal digits) by removing trailing zeroes</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>trim_scale(8.4100) → 8.41</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>trunc ( numeric ) → numeric</code><br/><code>trunc ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Truncates to integer (towards zero)</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>trunc(42.8) → 42</code><br/><code>trunc(-42.8) → -42</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>trunc ( <em>v</em> numeric, <em>s</em> integer ) → numeric</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Truncates <code><em>v</em></code> to <code><em>s</em></code> decimal places</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>trunc(42.4382, 2) → 42.43</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>width_bucket ( <em>operand</em> numeric, <em>low</em> numeric, <em>high</em> numeric, <em>count</em> integer ) → integer</code><br/><code>width_bucket ( <em>operand</em> double precision, <em>low</em> double precision, <em>high</em> double precision, <em>count</em> integer ) → integer</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns the number of the bucket in which <code><em>operand</em></code> falls in a histogram having <code><em>count</em></code> equal-width buckets spanning the range <code><em>low</em></code> to <code><em>high</em></code>. Returns <code>0</code> or <code><em>count</em>+1</code> for an input outside that range.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>width_bucket(5.35, 0.024, 10.06, 5) → 3</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>width_bucket ( operand anyelement, thresholds anyarray ) → integer</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns the number of the bucket in which <code><em>operand</em></code> falls given an array listing the lower bounds of the buckets. Returns <code>0</code> for an input less than the first lower bound. <code><em>operand</em></code> and the array elements can be of any type having standard comparison operators. The <code><em>thresholds</em></code> array <em>must be sorted</em>, smallest first, or unexpected results will be obtained.</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>width_bucket(now(), array['yesterday', 'today', 'tomorrow']::timestamptz[]) → 2</code></td>
  </tr>
  <br/>
</table>

<br/>

#### Random Functions

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>random ( ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns a random value in the range 0.0 &lt;= x &lt; 1.0</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>random() → 0.897124072839091</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>setseed ( double precision ) → void</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Sets the seed for subsequent random() calls; argument must be between -1.0 and 1.0, inclusive</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>setseed(0.12345)</code></td>
  </tr>
  <br/>
</table>

<br/>

#### Trigonometric Functions

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>acos ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Inverse cosine, result in radians</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>acos(1) → 0</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>acosd ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Inverse cosine, result in degrees</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>acosd(0.5) → 60</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>asin ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Inverse sine, result in radians</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>asin(1) → 1.5707963267948966</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>asind ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Inverse sine, result in degrees</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>asind(0.5) → 30</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>atan ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Inverse tangent, result in radians</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>atan(1) → 0.7853981633974483</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>atand ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Inverse tangent, result in degrees</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>atand(1) → 45</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>atan2 ( <em>y</em> double precision, <em>x</em> double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Inverse tangent of <code><em>y/x</em></code>, result in radians</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>atan2(1,0) → 1.5707963267948966</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>atan2d ( <em>y</em> double precision, <em>x</em> double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Inverse tangent of <code><em>y/x</em></code>, result in degrees</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>atan2d(1,0) → 90</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>cos ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Cosine, argument in radians</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>cos(0) → 1</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>cosd ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Cosine, argument in degrees</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>cosd(60) → 0.5</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>cot ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Cotangent, argument in radians</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>cot(0.5) → 1.830487721712452</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>cotd ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Cotangent, argument in degrees</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>cotd(45) → 1</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>sin ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Sine, argument in radians</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>sin(1) → 0.8414709848078965</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>sind ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Sine, argument in degrees</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>sind(30) → 0.5</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>tan ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Tangent, argument in radians</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>tan(1) → 1.5574077246549023</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>tand ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Tangent, argument in degrees</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>tand(45) → 1</code></td>
  </tr>
  <br/>
</table>

<br/>

#### Hyperbolic Functions

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>sinh ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Hyperbolic sine</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>sinh(1) → 1.1752011936438014</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>cosh ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Hyperbolic cosine</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>cosh(0) → 1</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>tanh ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Hyperbolic tangent</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>tanh(1) → 0.7615941559557649</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>asinh ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Inverse hyperbolic sine</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>asinh(1) → 0.881373587019543</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>acosh ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Inverse hyperbolic cosine</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>acosh(1) → 0</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>atanh ( double precision ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Inverse hyperbolic tangent</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>atanh(0.5) → 0.5493061443340548</code></td>
  </tr>
  <br/>
</table>

<br/>

### Dates

See the [official docs](https://www.postgresql.org/docs/current/functions-datetime.html) for more on all functions in this category. The table immediately below provides you the most commonly used PostgreSQL functions as considred on PostgreSQL Tutorial. Links to these functions take you to the function's reference on the PostgreSQL Tutorial site. Underneath the table below is a reproduction of what currently exists in the Postgres docs in a more palatable form.

| Function | Return Type | Description |
| :-- | :-- | :-- | 
| [`AGE`](https://www.postgresqltutorial.com/postgresql-age/) | `INTERVAL` | Calculate ages between two timestamps and returns a "symbolic" result which uses years and months | 
| [`AGE`](https://www.postgresqltutorial.com/postgresql-age/) | `INTERVAL` | Calculate ages between current date (at midnight) and a timestamp and returns a "symbolic" result which uses years and months | 
| `CLOCK_TIMESTAMP` | `TIMESTAMPTZ` | Return the current date and time which changes during statement execution | 
| [`CURRENT_DATE`](https://www.postgresqltutorial.com/postgresql-current_date/) | `DATE` | Return the current date | 
| [`CURRENT_TIME`](https://www.postgresqltutorial.com/postgresql-current_time/) | `TIMESTAMPTZ` | Return the current time | 
| [`CURRENT_TIMESTAMP`](https://www.postgresqltutorial.com/postgresql-current_timestamp/) | `TIMESTAMPTZ` | Return the current date and time with time zone at which the current transaction starts | 
| [`DATE_PART`](https://www.postgresqltutorial.com/postgresql-date_part/) | `DOUBLE PRECISION` | Get a field of a timestamp or an interval e.g., year, month, day, etc. | 
| [`DATE_TRUNC`](https://www.postgresqltutorial.com/postgresql-date_trunc/) | `TIMESTAMP` | Return a timestamp truncated to a specified precision | 
| [`EXTRACT`](https://www.postgresqltutorial.com/postgresql-extract/) | `DOUBLE PRECISION` | Same as `DATE_PART()` function | 
| `ISFINITE` | `BOOLEAN` | Check if a date, a timestamp, or an interval is finite or not (not +/-infinity) | 
| `JUSTIFY_DAYS` | `INTERVAL` | Adjust interval so 30-day time periods are represented as months | 
| `JUSTIFY_HOURS` | `INTERVAL` | Adjust interval so 24-hour time periods are represented as days | 
| `JUSTIFY_INTERVAL` | `INTERVAL` | Adjust interval using `justify_days` and `justify_hours`, with additional sign adjustments | 
| [`LOCALTIME`](https://www.postgresqltutorial.com/postgresql-localtime/) | `TIME` | Return the time at which the current transaction start | 
| [`LOCALTIMESTAMP`](https://www.postgresqltutorial.com/postgresql-localtimestamp/) | `TIMESTAMP` | Return the date and time at which the current transaction start | 
| [`NOW`](https://www.postgresqltutorial.com/postgresql-now/) | `TIMESTAMPTZ` | Return the date and time with time zone at which the current transaction start | 
| `STATEMENT_TIMESTAMP` | `TIMESTAMPTZ` | Return the current date and time at which the current statement executes | 
| `TIMEOFDAY` | `TEXT` | Return the current date and time, like `clock_timestamp`, as a text string | 
| `TRANSACTION_TIMESTAMP` | `TIMESTAMPTZ` | Same as `NOW()` function | 
| [`TO_DATE`](https://www.postgresqltutorial.com/postgresql-to_date/) | `DATE` | Convert a string to a date | 
| [`TO_TIMESTAMP`](https://www.postgresqltutorial.com/postgresql-to_timestamp/) | `TIMESTAMPTZ` | Convert a string to a timestamp | 

The tables below appear in the official Postgres docs.

- [Date/Time Operators](#datetime-operators)
- [Date/Time Functions](#datetime-functions)

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>date + integer → date</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Add a number of days to a date</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>date '2001-09-28' + 7 → 2001-10-05</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>date + interval → timestamp</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Add an interval to a date</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>date '2001-09-28' + interval '1 hour' → 2001-09-28 01:00:00</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>date + time → timestamp</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Add a time-of-day to a date</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>date '2001-09-28' + time '03:00' → 2001-09-28 03:00:00</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>interval + interval → interval</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Add intervals</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>interval '1 day' + interval '1 hour' → 1 day 01:00:00</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>timestamp + interval → timestamp</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Add an interval to a timestamp</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>timestamp '2001-09-28 01:00' + interval '23 hours' → 2001-09-29 00:00:00</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>time + interval → time</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Add an interval to a time</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>time '01:00' + interval '3 hours' → 04:00:00</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>- interval → interval</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Negate an interval</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>- interval '23 hours' → -23:00:00</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>date - date → integer</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Subtract dates, producing the number of days elapsed</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>date '2001-10-01' - date '2001-09-28' → 3</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>date - integer → date</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Subtract a number of days from a date</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>date '2001-10-01' - 7 → 2001-09-24</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>date - interval → timestamp</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Subtract an interval from a date</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>date '2001-09-28' - interval '1 hour' → 2001-09-27 23:00:00</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>time - time → interval</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Subtract times</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>time '05:00' - time '03:00' → 02:00:00</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>time - interval → time</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Subtract an interval from a time</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>time '05:00' - interval '2 hours' → 03:00:00</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>timestamp - interval → timestamp</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Subtract an interval from a timestamp</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>timestamp '2001-09-28 23:00' - interval '23 hours' → 2001-09-28 00:00:00</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>interval - interval → interval</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Subtract intervals</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>interval '1 day' - interval '1 hour' → 1 day -01:00:00</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>timestamp - timestamp → interval</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Subtract timestamps (converting 24-hour intervals into days, similarly to <code>justify_hours()</code>)</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>timestamp '2001-09-29 03:00' - timestamp '2001-07-27 12:00' → 63 days 15:00:00</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>interval * double precision → interval</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Multiply an interval by a scalar</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>interval '1 second' * 900 → 00:15:00</code><br/><code>interval '1 day' * 21 → 21 days</code><br/><code>interval '1 hour' * 3.5 → 03:30:00</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>interval / double precision → interval</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Divide an interval by a scalar</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>interval '1 hour' / 1.5 → 00:40:00</code></td>
  </tr>
  <br/>
</table>

<br/>

#### Date/Time Functions 

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>age ( timestamp, timestamp ) → interval</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Subtract arguments, producing a “symbolic” result that uses years and months, rather than just days</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>age(timestamp '2001-04-10', timestamp '1957-06-13') → 43 years 9 mons 27 days</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>age ( timestamp ) → interval</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Subtract argument from <code>current_date</code> (at midnight)</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>age(timestamp '1957-06-13') → 62 years 6 mons 10 days</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>clock_timestamp ( ) → timestamp with time zone</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Current date and time (changes during statement execution); see <a href="https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-CURRENT">Section 9.9.4</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>clock_timestamp() → 2019-12-23 14:39:53.662522-05</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>current_date → date</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Current date; see <a href="https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-CURRENT">Section 9.9.4</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>current_date → 2019-12-23</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>current_time → time with time zone</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Current time of day; see <a href="https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-CURRENT">Section 9.9.4</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>current_time → 14:39:53.662522-05</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>current_time ( integer ) → time with time zone</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Current time of day, with limited precision; see <a href="https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-CURRENT">Section 9.9.4</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>current_time(2) → 14:39:53.66-05</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>current_timestamp → timestamp with time zone</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Current date and time (start of current transaction); see <a href="https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-CURRENT">Section 9.9.4</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>current_timestamp → 2019-12-23 14:39:53.662522-05</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>current_timestamp ( integer ) → timestamp with time zone</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Current date and time (start of current transaction), with limited precision; see <a href="https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-CURRENT">Section 9.9.4</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>current_timestamp(0) → 2019-12-23 14:39:53-05</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>date_part ( text, timestamp ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Get timestamp subfield (equivalent to extract); see <a href="https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-EXTRACT">Section 9.9.1</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>date_part('hour', timestamp '2001-02-16 20:38:40') → 20</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>date_part ( text, interval ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Get interval subfield (equivalent to extract); see <a href="https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-EXTRACT">Section 9.9.1</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>date_part('month', interval '2 years 3 months') → 3</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>date_trunc ( text, timestamp ) → timestamp</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Truncate to specified precision; see <a href="https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-TRUNC">Section 9.9.2</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>date_trunc('hour', timestamp '2001-02-16 20:38:40') → 2001-02-16 20:00:00</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>date_trunc ( text, timestamp with time zone, text ) → timestamp with time zone</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Truncate to specified precision in the specified time zone; see <a href="https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-TRUNC">Section 9.9.2</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>date_trunc('day', timestamptz '2001-02-16 20:38:40+00', 'Australia/Sydney') → 2001-02-16 13:00:00+00</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>date_trunc ( text, interval ) → interval</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Truncate to specified precision; see <a href="https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-TRUNC">Section 9.9.2</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>date_trunc('hour', interval '2 days 3 hours 40 minutes') → 2 days 03:00:00</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>extract ( <em>field</em> from timestamp ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Get timestamp subfield; see <a href="https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-EXTRACT">Section 9.9.1</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>extract(hour from timestamp '2001-02-16 20:38:40') → 20</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>extract ( <em>field</em> from interval ) → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Get interval subfield; see <a href="https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-EXTRACT">Section 9.9.1</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>extract(month from interval '2 years 3 months') → 3</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>isfinite ( date ) → boolean</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Test for finite date (not +/-infinity)</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>isfinite(date '2001-02-16') → true</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>isfinite ( timestamp ) → boolean</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Test for finite timestamp (not +/-infinity)</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>isfinite(timestamp 'infinity') → false</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>isfinite ( interval ) → boolean</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Test for finite interval (currently always true)</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>isfinite(interval '4 hours') → true</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>justify_days ( interval ) → interval</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Adjust interval so 30-day time periods are represented as months</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>justify_days(interval '35 days') → 1 mon 5 days</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>justify_hours ( interval ) → interval</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Adjust interval so 24-hour time periods are represented as days</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>justify_hours(interval '27 hours') → 1 day 03:00:00</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>justify_interval ( interval ) → interval</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Adjust interval using <code>justify_days</code> and <code>justify_hours</code>, with additional sign adjustments</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>justify_interval(interval '1 mon -1 hour') → 29 days 23:00:00</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>localtime → time</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Current time of day; see <a href="https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-CURRENT">Section 9.9.4</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>localtime → 14:39:53.662522</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>localtime ( integer ) → time</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Current time of day, with limited precision; see <a href="https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-CURRENT">Section 9.9.4</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>localtime(0) → 14:39:53</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>localtimestamp → timestamp</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Current date and time (start of current transaction); see <a href="https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-CURRENT">Section 9.9.4</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>localtimestamp → 2019-12-23 14:39:53.662522</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>localtimestamp ( integer ) → timestamp</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Current date and time (start of current transaction), with limited precision; see <a href="https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-CURRENT">Section 9.9.4</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>localtimestamp(2) → 2019-12-23 14:39:53.66</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>make_date ( <em>year</em> int, <em>month</em> int, <em>day</em> int ) → date</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Create date from year, month and day fields</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>make_date(2013, 7, 15) → 2013-07-15</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>make_interval ( [ <em>years</em> int [, <em>months</em> int [, <em>weeks</em> int [, <em>days</em> int [, <em>hours</em> int [, <em>mins</em> int [, <em>secs</em> double precision ]]]]]]] ) → interval</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Create interval from years, months, weeks, days, hours, minutes and seconds fields, each of which can default to zero</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>make_interval(days => 10) → 10 days</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>make_time ( <em>hour</em> int, <em>min</em> int, <em>sec</em> double precision ) → time</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Create time from hour, minute and seconds fields</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>make_time(8, 15, 23.5) → 08:15:23.5</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>make_timestamp ( <em>year</em> int, <em>month</em> int, <em>day</em> int, <em>hour</em> int, <em>min</em> int, <em>sec</em> double precision ) → timestamp</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Create timestamp from year, month, day, hour, minute and seconds fields</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>make_timestamp(2013, 7, 15, 8, 15, 23.5) → 2013-07-15 08:15:23.5</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>make_timestamptz ( <em>year</em> int, <em>month</em> int, <em>day</em> int, <em>hour</em> int, <em>min</em> int, <em>sec</em> double precision [, <em>timezone</em> text ] ) → timestamp with time zone</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Create timestamp with time zone from year, month, day, hour, minute and seconds fields; if <code><em>timezone</em></code> is not specified, the current time zone is used</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>make_timestamptz(2013, 7, 15, 8, 15, 23.5) → 2013-07-15 08:15:23.5+01</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>now ( ) → timestamp with time zone</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Current date and time (start of current transaction); see <a href="https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-CURRENT">Section 9.9.4</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>now() → 2019-12-23 14:39:53.662522-05</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>statement_timestamp ( ) → timestamp with time zone</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Current date and time (start of current statement); see <a href="https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-CURRENT">Section 9.9.4</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>statement_timestamp() → 2019-12-23 14:39:53.662522-05</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>timeofday ( ) → text</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Current date and time (like clock_timestamp, but as a text string); see <a href="https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-CURRENT">Section 9.9.4</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>timeofday() → Mon Dec 23 14:39:53.662522 2019 EST</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>transaction_timestamp ( ) → timestamp with time zone</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Current date and time (start of current transaction); see <a href="https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-CURRENT">Section 9.9.4</a></td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>transaction_timestamp() → 2019-12-23 14:39:53.662522-05</code></td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>to_timestamp ( double precision ) → timestamp with time zone</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Convert Unix epoch (seconds since 1970-01-01 00:00:00+00) to timestamp with time zone</td>
  </tr>
  <tr>
    <td><strong>Example(s)</strong></td>
    <td><code>to_timestamp(1284352323) → 2010-09-13 04:32:03+00</code></td>
  </tr>
  <br/>
</table>

<br/>

### Window Functions

See the [official docs](https://www.postgresql.org/docs/current/functions-window.html) for more on all functions in this category. The table immediately below provides you the most commonly used PostgreSQL functions as considred on PostgreSQL Tutorial. Links to these functions take you to the function's reference on the PostgreSQL Tutorial site. Underneath the table below is a reproduction of what currently exists in the Postgres docs in a more palatable form.

The table immediately below lists all window functions provided by PostgreSQL. Note that some aggregate functions such as `AVG()`, `MIN()`, `MAX()`, `SUM()`, and `COUNT()` can be also used as window functions.

| Function | Description |
| :-- | :-- |
| [`CUME_DIST`](https://www.postgresqltutorial.com/postgresql-cume_dist-function/) | Return the relative rank of the current row |
| [`DENSE_RANK`](https://www.postgresqltutorial.com/postgresql-dense_rank-function/) | Rank the current row within its partition without gaps |
| [`FIRST_VALUE`](https://www.postgresqltutorial.com/postgresql-first_value-function/) | Return a value evaluated against the first row within its partition |
| [`LAG`](https://www.postgresqltutorial.com/postgresql-lag-function/) | Return a value evaluated at the row that is at a specified physical offset row before the current row within the partition |
| [`LAST_VALUE`](https://www.postgresqltutorial.com/postgresql-last_value-function/) | Return a value evaluated against the last row within its partition |
| [`LEAD`](https://www.postgresqltutorial.com/postgresql-lead-function/) | Return a value evaluated at the row that is offset rows after the current row within the partition |
| [`NTILE`](https://www.postgresqltutorial.com/postgresql-ntile-function/) | Divide rows in a partition as equally as possible and assign each row an integer starting from 1 to the argument value |
| [`NTH_VALUE`](https://www.postgresqltutorial.com/postgresql-nth_value-function/) | Return a value evaluated against the nth row in an ordered partition |
| [`PERCENT_RANK`](https://www.postgresqltutorial.com/postgresql-percent_rank-function/) | Return the relative rank of the current row (rank-1) / (total rows – 1) |
| [`RANK`](https://www.postgresqltutorial.com/postgresql-rank-function/) | Rank the current row within its partition with gaps |
| [`ROW_NUMBER`](https://www.postgresqltutorial.com/postgresql-row_number/) | Number the current row within its partition starting from 1 |

The following table is from the official Postgres docs.

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>row_number () → bigint</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns the number of the current row within its partition, counting from 1.</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>rank () → bigint</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns the rank of the current row, with gaps; that is, the <code>row_number</code> of the first row in its peer group.</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>dense_rank () → bigint</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns the rank of the current row, without gaps; this function effectively counts peer groups.</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>percent_rank () → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns the relative rank of the current row, that is (<code>rank - 1</code>) / (total partition rows - 1). The value thus ranges from 0 to 1 inclusive.</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>cume_dist () → double precision</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns the cumulative distribution, that is (number of partition rows preceding or peers with current row) / (total partition rows). The value thus ranges from 1/<code><em>N</em></code> to 1.</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>ntile ( <em>num_buckets</em> integer ) → integer</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns an integer ranging from 1 to the argument value, dividing the partition as equally as possible.</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>lag ( <em>value</em> anyelement [, <em>offset</em> integer [, <em>default</em> anyelement ]] ) → anyelement</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns <code><em>value</em></code> evaluated at the row that is <code><em>offset</em></code> rows before the current row within the partition; if there is no such row, instead returns <code><em>default</em></code> (which must be of the same type as value). Both <code><em>offset</em></code> and <code><em>default</em></code> are evaluated with respect to the current row. If omitted, <code><em>offset</em></code> defaults to 1 and <code><em>default</em></code> to <code>NULL</code>.</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>lead ( <em>value</em> anyelement [, <em>offset</em> integer [, <em>default</em> anyelement ]] ) → anyelement</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns <code><em>value</em></code> evaluated at the row that is <code><em>offset</em></code> rows after the current row within the partition; if there is no such row, instead returns <code><em>default</em></code> (which must be of the same type as <code><em>value</em></code>). Both <code><em>offset</em></code> and <code><em>default</em></code> are evaluated with respect to the current row. If omitted, <code><em>offset</em></code> defaults to 1 and <code><em>default</em></code> to <code>NULL</code>.</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>first_value ( <em>value</em> anyelement ) → anyelement</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns <code><em>value</em></code> evaluated at the row that is the first row of the window frame.</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>last_value ( <em>value</em> anyelement ) → anyelement</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns <code><em>value</em></code> evaluated at the row that is the last row of the window frame.</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>nth_value ( <em>value</em> anyelement, <em>n</em> integer ) → anyelement</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Returns <code><em>value</em></code> evaluated at the row that is the <code><em>n</em></code>'th row of the window frame (counting from 1); returns <code>NULL</code> if there is no such row.</td>
  </tr>
  <br/>
</table>

<br/>

### Set Returning Functions

See the [official docs](https://www.postgresql.org/docs/current/functions-srf.html) for more on all functions in this category. Specifically, this section describes functions that possibly return more than one row. The most widely used functions in this class are series generating functions, as shown below:

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>generate_series ( <em>start</em> integer, <em>stop</em> integer [, <em>step</em> integer ] ) → setof integer</code><br/><code>generate_series ( <em>start</em> bigint, <em>stop</em> bigint [, <em>step</em> bigint ] ) → setof bigint</code><br/><code>generate_series ( <em>start</em> numeric, <em>stop</em> numeric [, <em>step</em> numeric ] ) → setof numeric</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Generates a series of values from <code><em>start</em></code> to <code><em>stop</em></code>, with a step size of <code><em>step</em></code>. <code><em>step</em></code> defaults to <code>1</code>.</td>
  </tr>
  <br/>
</table>

<br/>

<table border='1' width='100%' style={{margin: '0px'}}>
  <tr>
    <td><strong>Syntax</strong></td>
    <td><code>generate_series ( <em>start</em> timestamp, <em>stop</em> timestamp, <em>step</em> interval ) → setof timestamp</code><br/><code>generate_series ( <em>start</em> timestamp with time zone, <em>stop</em> timestamp with time zone, <em>step</em> interval ) → setof timestamp with time zone</code></td>
  </tr>
  <tr>
    <td><strong>Description</strong></td>
    <td>Generates a series of values from <code><em>start</em></code> to <code><em>stop</em></code>, with a step size of <code><em>step</em></code>.</td>
  </tr>
  <br/>
</table>

<br/>

When <code><em>step</em></code> is positive, zero rows are returned if <code><em>start</em></code> is greater than <code><em>stop</em></code>. Conversely, when <code><em>step</em></code> is negative, zero rows are returned if <code><em>start</em></code> is less than <code><em>stop</em></code>. Zero rows are also returned if any input is <code>NULL</code>. It is an error for <code><em>step</em></code> to be zero. Some examples follow:

**1\. Generate series of sequential integers**

``` SQL
SELECT * FROM GENERATE_SERIES(2,4);
```

yields

```
┌─────────────────┐
│ generate_series │
├─────────────────┤
│               2 │
│               3 │
│               4 │
└─────────────────┘
(3 rows)
```

**2\. Generate series of sequential integers in reverse with a specified step size**

``` SQL
SELECT * FROM GENERATE_SERIES(5,1,-2);
```

yields

```
┌─────────────────┐
│ generate_series │
├─────────────────┤
│               5 │
│               3 │
│               1 │
└─────────────────┘
(3 rows)
```

**3\. Return 0 rows by specifying a stop value smaller than a start value**

``` SQL
SELECT * FROM GENERATE_SERIES(4,3);
```

yields

```
┌─────────────────┐
│ generate_series │
├─────────────────┤
└─────────────────┘
(0 rows)
```

**4\. Specify a non-integer step size**

``` SQL
SELECT GENERATE_SERIES(1.1, 4, 1.3);
```

yields

```
┌─────────────────┐
│ generate_series │
├─────────────────┤
│             1.1 │
│             2.4 │
│             3.7 │
└─────────────────┘
(3 rows)
```

**5\. Generate sequential dates**

``` SQL
-- this example relies on the date-plus-integer operator:
SELECT CURRENT_DATE + s.a AS dates FROM GENERATE_SERIES(0,14,7) AS s(a);
```

yields

```
┌────────────┐
│   dates    │
├────────────┤
│ 2021-03-04 │
│ 2021-03-11 │
│ 2021-03-18 │
└────────────┘
(3 rows)
```

**6\. Generate range of timestamps between two specified timestamps using a given step size**

``` SQL
SELECT * FROM GENERATE_SERIES('2008-03-01 00:00'::TIMESTAMP, '2008-03-04 12:00', '10 hours');
```

yields

```
┌─────────────────────┐
│   generate_series   │
├─────────────────────┤
│ 2008-03-01 00:00:00 │
│ 2008-03-01 10:00:00 │
│ 2008-03-01 20:00:00 │
│ 2008-03-02 06:00:00 │
│ 2008-03-02 16:00:00 │
│ 2008-03-03 02:00:00 │
│ 2008-03-03 12:00:00 │
│ 2008-03-03 22:00:00 │
│ 2008-03-04 08:00:00 │
└─────────────────────┘
(9 rows)
```
